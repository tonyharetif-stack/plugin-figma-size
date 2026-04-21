export type ComponentRole =
  | 'top_label'
  | 'date'
  | 'headline'
  | 'subheadline'
  | 'hero_image'
  | 'logo'
  | 'cta'
  | 'promo_badge'
  | 'secondary_visual'
  | 'background'
  | 'decorative_shape';

export type LayoutMode = 'horizontal' | 'compact-horizontal' | 'stacked' | 'custom';

export interface SafeZone {
  top: number;
  right: number;
  bottom: number;
  left: number;
}

export interface TypographyRule {
  minFontSize: number;
  maxFontSize: number;
  maxLines: number;
  preserveHierarchyWeight?: number;
}

export interface RoleConstraint {
  anchor: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'center';
  box: { x: number; y: number; width: number; height: number };
  minWidth?: number;
  minHeight?: number;
  keepAspectRatio?: boolean;
  allowHide?: boolean;
}

export interface FormatLayoutRule {
  width: number;
  height: number;
  layout: LayoutMode;
  safeZone: SafeZone;
  roleConstraints: Partial<Record<ComponentRole, RoleConstraint>>;
  typography: Partial<Record<ComponentRole, TypographyRule>>;
}

export interface DesignSystemConfig {
  version: string;
  formatOrder: string[];
  priorities: ComponentRole[];
  formats: Record<string, FormatLayoutRule>;
}

export interface RoleMapping {
  role: ComponentRole;
  node: SceneNode;
  confidence: number;
}

export interface ValidationIssue {
  format: string;
  role?: ComponentRole;
  severity: 'warning' | 'error';
  code:
    | 'TEXT_OVERFLOW'
    | 'COLLISION'
    | 'SAFE_ZONE_BREACH'
    | 'MIN_SIZE_BREACH'
    | 'DISTORTION'
    | 'MISSING_ROLE';
  message: string;
}

export interface GenerateOptions {
  sectionName?: string;
  failFast?: boolean;
}

export interface GenerateResult {
  generatedFrames: FrameNode[];
  issues: ValidationIssue[];
}
