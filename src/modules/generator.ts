import { defaultDesignSystem } from '../config/default-design-system';
import { DesignSystemConfig, GenerateOptions, GenerateResult, RoleMapping } from '../types';
import { detectRoles } from './component-role-detection';
import { parseDesignSystem } from './design-system-parser';
import { duplicateMasterFrame, ensureOutputSection } from './frame-duplication';
import { applyLayout } from './layout-engine';
import { validateFrame } from './validation-engine';

const cloneMappingsForFrame = (masterFrame: FrameNode, clonedFrame: FrameNode, masterMappings: RoleMapping[]): RoleMapping[] => {
  const idMap = new Map<string, SceneNode>();
  const masterChildren = masterFrame.findAll(() => true);
  const clonedChildren = clonedFrame.findAll(() => true);

  masterChildren.forEach((n, i) => {
    if (clonedChildren[i]) idMap.set(n.id, clonedChildren[i]);
  });

  return masterMappings
    .map((m) => {
      const mappedNode = idMap.get(m.node.id);
      if (!mappedNode) return undefined;
      return { ...m, node: mappedNode };
    })
    .filter((m): m is RoleMapping => Boolean(m));
};

export const generateFormats = async (
  masterFrame: FrameNode,
  configRaw: unknown = defaultDesignSystem,
  options: GenerateOptions = {}
): Promise<GenerateResult> => {
  const config: DesignSystemConfig = parseDesignSystem(configRaw);
  const sectionName = options.sectionName ?? 'AUTO_GENERATED_MULTI_FORMATS';
  const page = figma.currentPage;
  const section = ensureOutputSection(page, sectionName);

  const masterMappings = detectRoles(masterFrame);
  const generatedFrames: FrameNode[] = [];
  const issues = [] as GenerateResult['issues'];

  for (const formatName of config.formatOrder) {
    const format = config.formats[formatName];
    if (!format) continue;

    const frame = duplicateMasterFrame(masterFrame, formatName, format.width, format.height);
    section.appendChild(frame);

    const mappings = cloneMappingsForFrame(masterFrame, frame, masterMappings);

    await applyLayout(frame, format, mappings);

    const validationIssues = validateFrame(formatName, frame, format, mappings);
    issues.push(...validationIssues);
    generatedFrames.push(frame);

    if (options.failFast && validationIssues.some((i) => i.severity === 'error')) {
      break;
    }
  }

  return { generatedFrames, issues };
};
