import sharp from 'sharp';

interface ResizeImageProps {
  inputBuffer: string;
  toFile: string;
  width: number;
  height: number;
}

export const resizeImage = async (props: ResizeImageProps): Promise<string | boolean> => {
  try {
    const { inputBuffer, width, height, toFile } = props;

    if (!inputBuffer || !width || !height || !toFile) return false;

    await sharp(inputBuffer).resize(width, height).toFormat('jpeg').toFile(toFile);

    return true;
  } catch (e) {
    return JSON.stringify(e);
  }
};
