export const isThumbnailImage = (filename: string | boolean): boolean => {
  return `${filename}`.includes('thumbnail');
};
