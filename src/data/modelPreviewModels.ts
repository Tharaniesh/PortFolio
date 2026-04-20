export type ModelCategory = 'H' | 'P' | 'S';
export type ModelFilter = 'ALL' | ModelCategory;

export type PortfolioModel = {
  id: string;
  fileName: string;
  label: string;
  url: string;
  category: ModelCategory | null;
};

export const MODEL_FILTERS: Array<{ id: ModelFilter; label: string }> = [
  { id: 'ALL', label: 'All' },
  { id: 'H', label: 'Hobby models' },
  { id: 'P', label: 'Product model design' },
  { id: 'S', label: 'Simple models' }
];

const modelModules = import.meta.glob('../assets/blender/*.glb', {
  eager: true,
  import: 'default',
  query: '?url'
}) as Record<string, string>;

function getFileName(path: string) {
  return path.split('/').pop() ?? path;
}

function getModelCategory(fileName: string): ModelCategory | null {
  const prefix = fileName.charAt(0).toUpperCase();

  if (prefix === 'H' || prefix === 'P' || prefix === 'S') {
    return prefix;
  }

  return null;
}

function createModelLabel(fileName: string) {
  const nameWithoutExtension = fileName.replace(/\.glb$/i, '');
  const normalizedName = nameWithoutExtension.replace(/^[A-Z]-/, '').replace(/[-_]+/g, ' ').trim();

  if (!normalizedName) {
    return 'Untitled model';
  }

  return normalizedName.replace(/\b\w/g, (character) => character.toUpperCase());
}

function createModelId(fileName: string) {
  return fileName.replace(/\.glb$/i, '').replace(/[^a-zA-Z0-9]+/g, '-').replace(/^-+|-+$/g, '').toLowerCase();
}

export const portfolioModels: PortfolioModel[] = Object.entries(modelModules)
  .map(([path, url]) => {
    const fileName = getFileName(path);

    return {
      id: createModelId(fileName),
      fileName,
      label: createModelLabel(fileName),
      url,
      category: getModelCategory(fileName)
    };
  })
  .sort((left, right) => left.fileName.localeCompare(right.fileName));

export function getFilteredModels(models: PortfolioModel[], filter: ModelFilter) {
  if (filter === 'ALL') {
    return models;
  }

  return models.filter((model) => model.category === filter);
}
