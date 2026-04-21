import { FormatLayoutRule, RoleMapping, RoleConstraint } from '../types';
import { fitTypography } from './typography-fitting';
import { fitVisualNode, preserveLogoRatio } from './image-fitting';

const resolveBox = (frame: FrameNode, format: FormatLayoutRule, box: RoleConstraint['box']) => {
  const safeWidth = frame.width - format.safeZone.left - format.safeZone.right;
  const safeHeight = frame.height - format.safeZone.top - format.safeZone.bottom;

  return {
    x: format.safeZone.left + box.x * safeWidth,
    y: format.safeZone.top + box.y * safeHeight,
    width: box.width * safeWidth,
    height: box.height * safeHeight
  };
};

const placeNode = (node: SceneNode, target: { x: number; y: number; width: number; height: number }) => {
  if ('resizeWithoutConstraints' in node) {
    node.resizeWithoutConstraints(Math.max(1, target.width), Math.max(1, target.height));
  } else if ('resize' in node) {
    node.resize(Math.max(1, target.width), Math.max(1, target.height));
  }
  if ('x' in node) node.x = target.x;
  if ('y' in node) node.y = target.y;
};

export const applyLayout = async (frame: FrameNode, format: FormatLayoutRule, mappings: RoleMapping[]): Promise<void> => {
  for (const mapping of mappings) {
    const constraint = format.roleConstraints[mapping.role];
    if (!constraint) continue;

    const target = resolveBox(frame, format, constraint.box);
    placeNode(mapping.node, target);

    if (mapping.role === 'logo') preserveLogoRatio(mapping.node);
    if (mapping.role === 'hero_image' || mapping.role === 'secondary_visual') fitVisualNode(mapping.node, { ...constraint, box: target });

    await fitTypography(mapping.node, format.typography[mapping.role]);

    if (constraint.minWidth && 'width' in mapping.node && mapping.node.width < constraint.minWidth) {
      if ('resize' in mapping.node) mapping.node.resize(constraint.minWidth, mapping.node.height);
    }
    if (constraint.minHeight && 'height' in mapping.node && mapping.node.height < constraint.minHeight) {
      if ('resize' in mapping.node) mapping.node.resize(mapping.node.width, constraint.minHeight);
    }
  }
};
