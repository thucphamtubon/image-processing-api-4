import express, { Request, Response } from 'express';
import { logger } from '../utilities/logger';
import { getImagePath } from '../utilities/get-image-path';
import { ImageProps } from '../types/Image';

const imageRoutes = (app: express.Application): void => {
  app.get('/images', logger, index);
};

const index = async (req: Request, res: Response): Promise<void> => {
  const { filename, width, height }: ImageProps = req.query;

  try {
    const imagePath = await getImagePath({ filename, width, height });

    if (imagePath) res.sendFile(imagePath as string);
    else {
      res.send(`
		<script>
			function goBackHome() {
        window.location.href = '/'
			}
		</script>
		<div>Something wrong!</div>
		<button onclick="goBackHome()">Go back home image!</button>
	`);
    }
  } catch (err) {
    res.status(400);
    res.json(err);
  }
};

export default imageRoutes;
