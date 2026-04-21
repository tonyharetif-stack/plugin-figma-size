import { TypographyRule } from '../types';

const hasTextOverflow = (node: TextNode): boolean => {
  const measuredHeight = node.height;
  const lineHeight = typeof node.lineHeight === 'object' && node.lineHeight.unit === 'PIXELS'
    ? node.lineHeight.value
    : node.fontSize;

  const text = node.characters || '';
  const estimatedLines = Math.max(1, Math.ceil(text.length / Math.max(6, Math.floor(node.width / (Number(node.fontSize) * 0.5)))));
  return estimatedLines * Number(lineHeight) > measuredHeight;
};

export const fitTypography = async (node: SceneNode, rule?: TypographyRule): Promise<void> => {
  if (!rule || node.type !== 'TEXT') return;

  await figma.loadFontAsync(node.fontName as FontName);

  node.fontSize = Math.min(rule.maxFontSize, Math.max(rule.minFontSize, Number(node.fontSize)));

  while (hasTextOverflow(node) && Number(node.fontSize) > rule.minFontSize) {
    node.fontSize = Number(node.fontSize) - 1;
  }

  const words = node.characters.split(' ');
  if (words.length > 1) {
    let rebuilt = '';
    words.forEach((word, index) => {
      const candidate = rebuilt.length ? `${rebuilt} ${word}` : word;
      node.characters = candidate;
      if (hasTextOverflow(node) && rebuilt) {
        rebuilt += '\n' + word;
      } else {
        rebuilt = candidate;
      }
      if (index === words.length - 1) node.characters = rebuilt;
    });
  }
};
