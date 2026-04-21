import { DesignSystemConfig } from '../types';

export const parseDesignSystem = (raw: unknown): DesignSystemConfig => {
  if (!raw || typeof raw !== 'object') {
    throw new Error('Design system invalid: payload must be an object');
  }

  const cfg = raw as Partial<DesignSystemConfig>;
  if (!cfg.formats || typeof cfg.formats !== 'object') {
    throw new Error('Design system invalid: missing formats');
  }

  if (!Array.isArray(cfg.formatOrder) || cfg.formatOrder.length === 0) {
    throw new Error('Design system invalid: formatOrder must be a non-empty array');
  }

  if (!Array.isArray(cfg.priorities) || cfg.priorities.length === 0) {
    throw new Error('Design system invalid: priorities must be a non-empty array');
  }

  for (const [name, format] of Object.entries(cfg.formats)) {
    if (!format || format.width <= 0 || format.height <= 0) {
      throw new Error(`Format ${name}: width/height must be > 0`);
    }
    if (!format.safeZone) {
      throw new Error(`Format ${name}: safeZone is required`);
    }
  }

  return cfg as DesignSystemConfig;
};
