// Runtime entry used by Figma manifest.
// This file is intentionally plain JS (no build step required) so the plugin can load directly.

const defaultDesignSystem = {
  version: '1.0.0',
  formatOrder: ['desktop_banner', 'slider', 'mobile_category_banner', 'square_card', 'small_square_thumb', 'crm', 'google_ads'],
  priorities: ['headline', 'hero_image', 'promo_badge', 'cta', 'logo', 'subheadline', 'date', 'top_label', 'secondary_visual', 'background', 'decorative_shape'],
  formats: {
    desktop_banner: {
      width: 1200,
      height: 250,
      layout: 'horizontal',
      safeZone: { top: 24, right: 24, bottom: 24, left: 24 },
      roleConstraints: {
        headline: { anchor: 'top-left', box: { x: 0.04, y: 0.12, width: 0.28, height: 0.28 } },
        subheadline: { anchor: 'top-left', box: { x: 0.04, y: 0.4, width: 0.3, height: 0.22 } },
        hero_image: { anchor: 'center', box: { x: 0.32, y: 0, width: 0.48, height: 1 }, keepAspectRatio: true },
        promo_badge: { anchor: 'top-right', box: { x: 0.74, y: 0.08, width: 0.1, height: 0.26 }, keepAspectRatio: true },
        logo: { anchor: 'bottom-right', box: { x: 0.84, y: 0.7, width: 0.12, height: 0.22 }, keepAspectRatio: true },
        cta: { anchor: 'bottom-left', box: { x: 0.04, y: 0.72, width: 0.14, height: 0.18 }, minHeight: 32, minWidth: 90 }
      },
      typography: {
        headline: { minFontSize: 18, maxFontSize: 44, maxLines: 2 },
        subheadline: { minFontSize: 12, maxFontSize: 24, maxLines: 2 },
        cta: { minFontSize: 12, maxFontSize: 18, maxLines: 1 }
      }
    },
    slider: {
      width: 640,
      height: 240,
      layout: 'horizontal',
      safeZone: { top: 16, right: 16, bottom: 16, left: 16 },
      roleConstraints: {
        headline: { anchor: 'top-left', box: { x: 0.05, y: 0.1, width: 0.38, height: 0.3 } },
        hero_image: { anchor: 'center', box: { x: 0.42, y: 0.02, width: 0.5, height: 0.96 }, keepAspectRatio: true },
        promo_badge: { anchor: 'top-right', box: { x: 0.82, y: 0.04, width: 0.14, height: 0.3 }, keepAspectRatio: true },
        cta: { anchor: 'bottom-left', box: { x: 0.05, y: 0.75, width: 0.18, height: 0.18 }, minHeight: 30, minWidth: 84 }
      },
      typography: {
        headline: { minFontSize: 16, maxFontSize: 36, maxLines: 2 },
        subheadline: { minFontSize: 11, maxFontSize: 20, maxLines: 2 },
        cta: { minFontSize: 11, maxFontSize: 16, maxLines: 1 }
      }
    },
    mobile_category_banner: {
      width: 390,
      height: 180,
      layout: 'compact-horizontal',
      safeZone: { top: 16, right: 16, bottom: 16, left: 16 },
      roleConstraints: {
        headline: { anchor: 'top-left', box: { x: 0.05, y: 0.12, width: 0.44, height: 0.34 } },
        hero_image: { anchor: 'center', box: { x: 0.45, y: 0.02, width: 0.46, height: 0.94 }, keepAspectRatio: true },
        promo_badge: { anchor: 'top-right', box: { x: 0.78, y: 0.03, width: 0.18, height: 0.32 }, keepAspectRatio: true },
        logo: { anchor: 'bottom-right', box: { x: 0.8, y: 0.72, width: 0.15, height: 0.2 }, keepAspectRatio: true }
      },
      typography: {
        headline: { minFontSize: 14, maxFontSize: 30, maxLines: 2 },
        subheadline: { minFontSize: 10, maxFontSize: 17, maxLines: 2 }
      }
    },
    square_card: {
      width: 1080,
      height: 1080,
      layout: 'stacked',
      safeZone: { top: 32, right: 32, bottom: 32, left: 32 },
      roleConstraints: {
        headline: { anchor: 'top-left', box: { x: 0.06, y: 0.08, width: 0.58, height: 0.2 } },
        subheadline: { anchor: 'top-left', box: { x: 0.06, y: 0.27, width: 0.52, height: 0.16 } },
        hero_image: { anchor: 'center', box: { x: 0.18, y: 0.36, width: 0.64, height: 0.56 }, keepAspectRatio: true },
        promo_badge: { anchor: 'top-right', box: { x: 0.7, y: 0.54, width: 0.18, height: 0.18 }, keepAspectRatio: true },
        cta: { anchor: 'bottom-left', box: { x: 0.06, y: 0.84, width: 0.24, height: 0.1 }, minHeight: 44, minWidth: 120 }
      },
      typography: {
        headline: { minFontSize: 42, maxFontSize: 100, maxLines: 3 },
        subheadline: { minFontSize: 26, maxFontSize: 56, maxLines: 3 },
        cta: { minFontSize: 20, maxFontSize: 36, maxLines: 1 }
      }
    },
    small_square_thumb: {
      width: 300,
      height: 300,
      layout: 'stacked',
      safeZone: { top: 12, right: 12, bottom: 12, left: 12 },
      roleConstraints: {
        headline: { anchor: 'top-left', box: { x: 0.08, y: 0.1, width: 0.62, height: 0.3 } },
        hero_image: { anchor: 'center', box: { x: 0.22, y: 0.38, width: 0.58, height: 0.56 }, keepAspectRatio: true },
        promo_badge: { anchor: 'top-right', box: { x: 0.72, y: 0.06, width: 0.22, height: 0.24 }, keepAspectRatio: true }
      },
      typography: {
        headline: { minFontSize: 12, maxFontSize: 28, maxLines: 2 }
      }
    },
    crm: {
      width: 800,
      height: 600,
      layout: 'custom',
      safeZone: { top: 28, right: 28, bottom: 28, left: 28 },
      roleConstraints: {
        headline: { anchor: 'top-left', box: { x: 0.08, y: 0.1, width: 0.42, height: 0.16 } },
        hero_image: { anchor: 'center', box: { x: 0.06, y: 0.24, width: 0.46, height: 0.54 }, keepAspectRatio: true },
        secondary_visual: { anchor: 'top-right', box: { x: 0.56, y: 0.08, width: 0.36, height: 0.42 }, keepAspectRatio: true, allowHide: true },
        cta: { anchor: 'bottom-left', box: { x: 0.12, y: 0.8, width: 0.22, height: 0.11 }, minHeight: 36, minWidth: 100 }
      },
      typography: {
        headline: { minFontSize: 28, maxFontSize: 56, maxLines: 2 },
        subheadline: { minFontSize: 16, maxFontSize: 28, maxLines: 2 }
      }
    },
    google_ads: {
      width: 1200,
      height: 628,
      layout: 'custom',
      safeZone: { top: 28, right: 28, bottom: 28, left: 28 },
      roleConstraints: {
        headline: { anchor: 'top-left', box: { x: 0.05, y: 0.08, width: 0.4, height: 0.2 } },
        subheadline: { anchor: 'top-left', box: { x: 0.05, y: 0.28, width: 0.4, height: 0.12 } },
        hero_image: { anchor: 'center', box: { x: 0.46, y: 0.02, width: 0.46, height: 0.96 }, keepAspectRatio: true },
        cta: { anchor: 'bottom-left', box: { x: 0.05, y: 0.76, width: 0.18, height: 0.14 }, minHeight: 42, minWidth: 120 },
        logo: { anchor: 'top-right', box: { x: 0.84, y: 0.08, width: 0.12, height: 0.16 }, keepAspectRatio: true }
      },
      typography: {
        headline: { minFontSize: 30, maxFontSize: 68, maxLines: 2 },
        subheadline: { minFontSize: 16, maxFontSize: 30, maxLines: 2 },
        cta: { minFontSize: 14, maxFontSize: 24, maxLines: 1 }
      }
    }
  }
};

const roleHints = {
  top_label: [/top.?label/i, /tag/i, /kicker/i],
  date: [/date/i, /jour/i, /mois/i],
  headline: [/headline/i, /title/i, /accroche/i, /h1/i],
  subheadline: [/subheadline/i, /subtitle/i, /baseline/i, /h2/i],
  hero_image: [/hero/i, /main.?image/i, /visual.?main/i, /packshot/i],
  logo: [/logo/i, /brand/i],
  cta: [/cta/i, /button/i, /btn/i],
  promo_badge: [/badge/i, /sticker/i, /promo/i, /price/i],
  secondary_visual: [/secondary/i, /thumb/i, /side.?visual/i],
  background: [/background/i, /bg/i, /fond/i],
  decorative_shape: [/shape/i, /deco/i, /ornament/i]
};

function detectRoles(masterFrame) {
  const nodes = masterFrame.findAll((n) => n.type !== 'GROUP');
  const mappings = [];

  for (const node of nodes) {
    let bestRole = null;
    let bestScore = 0;
    const source = node.name || '';

    for (const role of Object.keys(roleHints)) {
      let score = roleHints[role].reduce((acc, re) => (re.test(source) ? acc + 1 : acc), 0);
      if (role === 'headline' && node.type === 'TEXT') score += 1;
      if (role === 'hero_image' && 'fills' in node && Array.isArray(node.fills) && node.fills.some((f) => f.type === 'IMAGE')) score += 2;
      if (score > bestScore) {
        bestScore = score;
        bestRole = role;
      }
    }

    if (bestRole && bestScore > 0) {
      mappings.push({ role: bestRole, node });
    }
  }

  return mappings;
}

function ensureOutputSection(page, name) {
  const existing = page.findOne((n) => n.type === 'SECTION' && n.name === name);
  if (existing && existing.type === 'SECTION') return existing;
  const section = figma.createSection();
  section.name = name;
  page.appendChild(section);
  return section;
}

function resolveBox(frame, format, box) {
  const safeWidth = frame.width - format.safeZone.left - format.safeZone.right;
  const safeHeight = frame.height - format.safeZone.top - format.safeZone.bottom;
  return {
    x: format.safeZone.left + box.x * safeWidth,
    y: format.safeZone.top + box.y * safeHeight,
    width: box.width * safeWidth,
    height: box.height * safeHeight
  };
}

async function fitTypography(node, rule) {
  if (!rule || node.type !== 'TEXT') return;

  try {
    if (node.fontName !== figma.mixed) {
      await figma.loadFontAsync(node.fontName);
    }
  } catch (e) {
    console.warn('Impossible de charger la font:', e);
    return;
  }

  const current = typeof node.fontSize === 'number' ? node.fontSize : rule.maxFontSize;
  node.fontSize = Math.min(rule.maxFontSize, Math.max(rule.minFontSize, current));

  while (node.height < Number(node.fontSize) && Number(node.fontSize) > rule.minFontSize) {
    node.fontSize = Number(node.fontSize) - 1;
  }
}

function placeNode(node, target, constraint) {
  if ('resizeWithoutConstraints' in node) {
    node.resizeWithoutConstraints(Math.max(1, target.width), Math.max(1, target.height));
  } else if ('resize' in node) {
    node.resize(Math.max(1, target.width), Math.max(1, target.height));
  }

  if ('x' in node) node.x = target.x;
  if ('y' in node) node.y = target.y;

  if (constraint.keepAspectRatio && 'constrainProportions' in node) {
    node.constrainProportions = true;
  }
}

function buildCloneMap(masterFrame, cloneFrame) {
  const map = new Map();
  const src = masterFrame.findAll(() => true);
  const dst = cloneFrame.findAll(() => true);
  src.forEach((n, i) => {
    if (dst[i]) map.set(n.id, dst[i]);
  });
  return map;
}

async function run() {
  const selection = figma.currentPage.selection;
  if (selection.length !== 1 || selection[0].type !== 'FRAME') {
    figma.notify('Sélectionne une frame master unique avant de lancer la génération.');
    figma.closePlugin();
    return;
  }

  const masterFrame = selection[0];
  const section = ensureOutputSection(figma.currentPage, 'EXPORT_MULTI_FORMATS');
  const baseMappings = detectRoles(masterFrame);
  const warnings = [];

  for (const formatName of defaultDesignSystem.formatOrder) {
    const format = defaultDesignSystem.formats[formatName];
    if (!format) continue;

    const clone = masterFrame.clone();
    clone.name = `${masterFrame.name} / ${formatName}`;
    clone.resizeWithoutConstraints(format.width, format.height);
    section.appendChild(clone);

    const cloneMap = buildCloneMap(masterFrame, clone);

    for (const mapping of baseMappings) {
      const clonedNode = cloneMap.get(mapping.node.id);
      const constraint = format.roleConstraints[mapping.role];
      if (!clonedNode || !constraint) continue;

      const target = resolveBox(clone, format, constraint.box);
      placeNode(clonedNode, target, constraint);
      await fitTypography(clonedNode, format.typography[mapping.role]);

      if (
        clonedNode.x < format.safeZone.left ||
        clonedNode.y < format.safeZone.top ||
        clonedNode.x + clonedNode.width > clone.width - format.safeZone.right ||
        clonedNode.y + clonedNode.height > clone.height - format.safeZone.bottom
      ) {
        warnings.push(`[${formatName}] ${mapping.role} sort potentiellement de la safe zone`);
      }
    }
  }

  if (warnings.length) {
    figma.notify(`Génération terminée avec ${warnings.length} warning(s).`);
    console.log(warnings);
  } else {
    figma.notify('Génération terminée ✅');
  }

  figma.closePlugin();
}

run().catch((e) => {
  console.error(e);
  figma.notify('Erreur plugin: voir console');
  figma.closePlugin();
});
