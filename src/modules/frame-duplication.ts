export const duplicateMasterFrame = (masterFrame: FrameNode, formatName: string, width: number, height: number): FrameNode => {
  const clone = masterFrame.clone();
  clone.name = `${masterFrame.name} / ${formatName}`;
  clone.resizeWithoutConstraints(width, height);
  return clone;
};

export const ensureOutputSection = (page: PageNode, name: string): SectionNode => {
  const existing = page.findOne((n) => n.type === 'SECTION' && n.name === name);
  if (existing && existing.type === 'SECTION') return existing;

  const section = figma.createSection();
  section.name = name;
  page.appendChild(section);
  return section;
};
