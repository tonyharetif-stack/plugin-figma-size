import { defaultDesignSystem } from './config/default-design-system';
import { generateFormats } from './modules/generator';

const run = async (): Promise<void> => {
  const selection = figma.currentPage.selection;
  if (selection.length !== 1 || selection[0].type !== 'FRAME') {
    figma.notify('Sélectionne une frame master unique avant de lancer la génération.');
    figma.closePlugin();
    return;
  }

  const masterFrame = selection[0] as FrameNode;

  try {
    const result = await generateFormats(masterFrame, defaultDesignSystem, {
      sectionName: 'EXPORT_MULTI_FORMATS'
    });

    const warnings = result.issues.filter((i) => i.severity === 'warning');
    if (warnings.length > 0) {
      figma.notify(`Génération terminée avec ${warnings.length} warning(s).`);
      console.log('Validation warnings:', warnings);
    } else {
      figma.notify(`Génération terminée : ${result.generatedFrames.length} formats créés.`);
    }
  } catch (error) {
    figma.notify('Erreur de génération. Vérifie le design system et la structure du master.');
    console.error(error);
  }

  figma.closePlugin();
};

void run();
