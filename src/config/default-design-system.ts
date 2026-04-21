import { DesignSystemConfig } from '../types';

export const defaultDesignSystem: DesignSystemConfig = {
  version: '1.0.0',
  formatOrder: [
    'desktop_banner',
    'slider',
    'mobile_category_banner',
    'square_card',
    'small_square_thumb',
    'crm',
    'google_ads'
  ],
  priorities: ['headline', 'hero_image', 'promo_badge', 'cta', 'logo', 'subheadline', 'date', 'top_label', 'secondary_visual', 'background', 'decorative_shape'],
  formats: {
    desktop_banner: {
      width: 1200,
      height: 250,
      layout: 'horizontal',
      safeZone: { top: 24, right: 24, bottom: 24, left: 24 },
      roleConstraints: {
        headline: { anchor: 'top-left', box: { x: 0.04, y: 0.12, width: 0.28, height: 0.28 } },
        subheadline: { anchor: 'top-left', box: { x: 0.04, y: 0.40, width: 0.30, height: 0.22 } },
        hero_image: { anchor: 'center', box: { x: 0.32, y: 0, width: 0.48, height: 1 }, keepAspectRatio: true },
        promo_badge: { anchor: 'top-right', box: { x: 0.74, y: 0.08, width: 0.10, height: 0.26 }, keepAspectRatio: true },
        logo: { anchor: 'bottom-right', box: { x: 0.84, y: 0.70, width: 0.12, height: 0.22 }, keepAspectRatio: true },
        cta: { anchor: 'bottom-left', box: { x: 0.04, y: 0.72, width: 0.14, height: 0.18 }, minHeight: 32, minWidth: 90 }
      },
      typography: {
        headline: { minFontSize: 18, maxFontSize: 44, maxLines: 2, preserveHierarchyWeight: 1 },
        subheadline: { minFontSize: 12, maxFontSize: 24, maxLines: 2, preserveHierarchyWeight: 0.8 },
        cta: { minFontSize: 12, maxFontSize: 18, maxLines: 1, preserveHierarchyWeight: 0.6 }
      }
    },
    slider: {
      width: 640,
      height: 240,
      layout: 'horizontal',
      safeZone: { top: 16, right: 16, bottom: 16, left: 16 },
      roleConstraints: {
        headline: { anchor: 'top-left', box: { x: 0.05, y: 0.10, width: 0.38, height: 0.30 } },
        hero_image: { anchor: 'center', box: { x: 0.42, y: 0.02, width: 0.50, height: 0.96 }, keepAspectRatio: true },
        promo_badge: { anchor: 'top-right', box: { x: 0.82, y: 0.04, width: 0.14, height: 0.30 }, keepAspectRatio: true },
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
        logo: { anchor: 'bottom-right', box: { x: 0.80, y: 0.72, width: 0.15, height: 0.20 }, keepAspectRatio: true }
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
        headline: { anchor: 'top-left', box: { x: 0.06, y: 0.08, width: 0.58, height: 0.20 } },
        subheadline: { anchor: 'top-left', box: { x: 0.06, y: 0.27, width: 0.52, height: 0.16 } },
        hero_image: { anchor: 'center', box: { x: 0.18, y: 0.36, width: 0.64, height: 0.56 }, keepAspectRatio: true },
        promo_badge: { anchor: 'top-right', box: { x: 0.70, y: 0.54, width: 0.18, height: 0.18 }, keepAspectRatio: true },
        cta: { anchor: 'bottom-left', box: { x: 0.06, y: 0.84, width: 0.24, height: 0.10 }, minHeight: 44, minWidth: 120 }
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
        headline: { anchor: 'top-left', box: { x: 0.08, y: 0.10, width: 0.62, height: 0.30 } },
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
        headline: { anchor: 'top-left', box: { x: 0.08, y: 0.10, width: 0.42, height: 0.16 } },
        hero_image: { anchor: 'center', box: { x: 0.06, y: 0.24, width: 0.46, height: 0.54 }, keepAspectRatio: true },
        secondary_visual: { anchor: 'top-right', box: { x: 0.56, y: 0.08, width: 0.36, height: 0.42 }, keepAspectRatio: true, allowHide: true },
        cta: { anchor: 'bottom-left', box: { x: 0.12, y: 0.80, width: 0.22, height: 0.11 }, minHeight: 36, minWidth: 100 }
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
        headline: { anchor: 'top-left', box: { x: 0.05, y: 0.08, width: 0.40, height: 0.20 } },
        subheadline: { anchor: 'top-left', box: { x: 0.05, y: 0.28, width: 0.40, height: 0.12 } },
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
