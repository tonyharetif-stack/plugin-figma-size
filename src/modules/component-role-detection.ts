import { ComponentRole, RoleMapping } from '../types';

const roleHints: Record<ComponentRole, RegExp[]> = {
  top_label: [/top.?label/i, /tag/i, /kicker/i],
  date: [/date/i, /jour/i, /mois/i],
  headline: [/headline/i, /title/i, /accroche/i, /h1/i],
  subheadline: [/subheadline/i, /subtitle/i, /baseline/i, /h2/i],
  hero_image: [/hero/i, /main.?image/i, /visual.?main/i, /packshot/i],
  logo: [/logo/i, /brand/i],
  cta: [/cta/i, /button/i, /btn/i, /call.?to.?action/i],
  promo_badge: [/badge/i, /sticker/i, /promo/i, /price/i],
  secondary_visual: [/secondary/i, /thumb/i, /side.?visual/i],
  background: [/background/i, /bg/i, /fond/i],
  decorative_shape: [/shape/i, /deco/i, /ornament/i]
};

const scoreNode = (node: SceneNode, role: ComponentRole): number => {
  const hints = roleHints[role];
  const source = `${node.name} ${(node as MinimalFillsMixin).type ?? ''}`;
  return hints.reduce((acc, regex) => (regex.test(source) ? acc + 1 : acc), 0);
};

const isLikelyImage = (node: SceneNode): boolean => {
  if ('fills' in node && Array.isArray(node.fills)) {
    return node.fills.some((fill) => fill.type === 'IMAGE');
  }
  return false;
};

export const detectRoles = (masterFrame: FrameNode): RoleMapping[] => {
  const nodes = masterFrame.findAll((n) => n.type !== 'GROUP');
  const mappings: RoleMapping[] = [];

  for (const node of nodes) {
    let bestRole: ComponentRole | undefined;
    let bestScore = 0;

    (Object.keys(roleHints) as ComponentRole[]).forEach((role) => {
      let score = scoreNode(node, role);

      if (role === 'hero_image' && isLikelyImage(node)) score += 2;
      if (role === 'headline' && node.type === 'TEXT') score += 1;
      if (role === 'cta' && /button|cta/i.test(node.name) && node.type !== 'TEXT') score += 2;

      if (score > bestScore) {
        bestScore = score;
        bestRole = role;
      }
    });

    if (bestRole && bestScore > 0) {
      mappings.push({ role: bestRole, node, confidence: Math.min(1, bestScore / 4) });
    }
  }

  return mappings;
};
