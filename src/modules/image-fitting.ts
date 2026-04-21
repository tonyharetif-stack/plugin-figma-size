import { RoleConstraint } from '../types';

export const fitVisualNode = (node: SceneNode, constraint: RoleConstraint): void => {
  if (!('resize' in node)) return;

  const targetWidth = constraint.box.width;
  const targetHeight = constraint.box.height;

  if (constraint.keepAspectRatio) {
    const ratio = node.width / node.height;
    const targetRatio = targetWidth / targetHeight;

    if (ratio > targetRatio) {
      node.resize(targetHeight * ratio, targetHeight);
    } else {
      node.resize(targetWidth, targetWidth / ratio);
    }
  } else {
    node.resize(targetWidth, targetHeight);
  }
};

export const preserveLogoRatio = (node: SceneNode): void => {
  if (!('constrainProportions' in node)) return;
  node.constrainProportions = true;
};
