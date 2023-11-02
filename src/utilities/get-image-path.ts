import path from 'path';
import { promises as fs } from 'fs';
import { ImageProps } from '../types/Image';
import { convertNumberValue } from './convert-number-value';
import { isThumbnailImage } from './is-thumbnail-image';
import { resizeImage } from './resize-image';

export const fullSizeImagePath: string = path.resolve(__dirname, '../../images');
export const thumbnailImagePath: string = path.resolve(__dirname, '../../images/thumbnails');

export const getFullSizeImagePath = (filename: string): string => {
  return path.resolve(fullSizeImagePath, filename);
};

export const getThumbnailImagePath = (filename: string): string => {
  return path.resolve(thumbnailImagePath, filename);
};

export const getFileNameWithSize = (props: ImageProps): string | boolean => {
  const { filename = '', width = '', height = '' } = props;
  const widthValue: number | boolean = convertNumberValue(width);
  const heightValue: number | boolean = convertNumberValue(height);

  if (filename && !(widthValue || heightValue)) {
    return `${filename}.jpg`;
  } else if (filename && widthValue && heightValue) {
    return `${filename}-thumbnail-${width}x${height}.jpg`;
  } else {
    return false;
  }
};

export const getImagePath = async (props: ImageProps): Promise<string | boolean> => {
  const newFileName: string | boolean = getFileNameWithSize(props);
  const isThumbnail: boolean = isThumbnailImage(newFileName);

  let filePath: string = '';

  try {
    if (newFileName && isThumbnail) {
      filePath = getThumbnailImagePath(String(newFileName));
      await fs.access(filePath);
    }
  } catch {
    await resizeImage({
      inputBuffer: fullSizeImagePath + '/' + props.filename + '.jpg',
      width: convertNumberValue(props.width || '') as number,
      height: convertNumberValue(props.height || '') as number,
      toFile: (thumbnailImagePath + '/' + newFileName) as string,
    });
  }

  try {
    if (newFileName && !isThumbnail) {
      filePath = getFullSizeImagePath(String(newFileName));
    }

    await fs.access(filePath);
  } catch (e) {
    console.log(e);

    return false;
  }

  return filePath;
};
