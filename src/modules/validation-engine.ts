import { ComponentRole, FormatLayoutRule, RoleMapping, ValidationIssue } from '../types';

const bounds = (node: SceneNode) => ({
  x1: node.x,
  y1: node.y,
  x2: node.x + node.width,
  y2: node.y + node.height
});

const intersects = (a: ReturnType<typeof bounds>, b: ReturnType<typeof bounds>): boolean => {
  return a.x1 < b.x2 && a.x2 > b.x1 && a.y1 < b.y2 && a.y2 > b.y1;
};

export const validateFrame = (formatName: string, frame: FrameNode, format: FormatLayoutRule, mappings: RoleMapping[]): ValidationIssue[] => {
  const issues: ValidationIssue[] = [];

  const byRole = new Map<ComponentRole, SceneNode>();
  mappings.forEach((m) => byRole.set(m.role, m.node));

  (Object.keys(format.roleConstraints) as ComponentRole[]).forEach((role) => {
    if (!byRole.has(role)) {
      issues.push({
        format: formatName,
        role,
        severity: 'warning',
        code: 'MISSING_ROLE',
        message: `Role ${role} absent du master pour le format ${formatName}.`
      });
    }
  });

  for (const mapping of mappings) {
    const b = bounds(mapping.node);

    if (
      b.x1 < format.safeZone.left ||
      b.y1 < format.safeZone.top ||
      b.x2 > frame.width - format.safeZone.right ||
      b.y2 > frame.height - format.safeZone.bottom
    ) {
      issues.push({
        format: formatName,
        role: mapping.role,
        severity: 'warning',
        code: 'SAFE_ZONE_BREACH',
        message: `Le rôle ${mapping.role} sort de la safe zone.`
      });
    }

    if (mapping.node.type === 'TEXT' && mapping.node.textAutoResize === 'NONE' && mapping.node.height < Number(mapping.node.fontSize)) {
      issues.push({
        format: formatName,
        role: mapping.role,
        severity: 'warning',
        code: 'TEXT_OVERFLOW',
        message: `Texte potentiellement tronqué pour ${mapping.role}.`
      });
    }
  }

  for (let i = 0; i < mappings.length; i += 1) {
    for (let j = i + 1; j < mappings.length; j += 1) {
      const left = mappings[i];
      const right = mappings[j];
      if (left.role === 'background' || right.role === 'background') continue;
      if (intersects(bounds(left.node), bounds(right.node))) {
        issues.push({
          format: formatName,
          severity: 'warning',
          code: 'COLLISION',
          message: `Collision entre ${left.role} et ${right.role}.`
        });
      }
    }
  }

  return issues;
};
