import express, { Express, Request, Response } from 'express';
import { logger } from './utilities/logger';
import imageRoutes from './handler/image';

const app: Express = express();

const port: number = 3000;

app.get('/', logger, (req: Request, res: Response): void => {
  res.send(`
<script>
 	function onViewImage() {
    const imageEvent = document.getElementById('image');
    const widthEvent = document.getElementById('width');
    const heightEvent = document.getElementById('height');
    
    const filename = imageEvent.value;
    const width = widthEvent.value;
    const height = heightEvent.value;
    
    const filenameParam = filename ? ['filename=', filename] : []
    const widthParam = width ? ['&', 'width=', width] : []
    const heightParam = height ? ['&', 'height=', height] : []
    
    const href = ['/images?', ...filenameParam, ...widthParam, ...heightParam].join('');
    window.open(href, '_blank')
 	}
</script>

<div>
	<h1>Welcome to Image Processing API!</h1>
	<h3>You can choose image and input height, width!</h3>
	
	<select
		id="image"
		name="image"
		onChange="onSelectImage()"
	>
		<option>encenadaport</option>
		<option>fjord</option>
		<option>icelandwaterfall</option>
		<option>palmtunnel</option>
		<option>santamonica</option>
	</select>
	
	<input id="width" name="width" placeholder="width" />
	<input id="height" name="height" placeholder="height" />
	<button onclick="onViewImage()">View image</button>
</div>
`);
});

imageRoutes(app);

app.listen(port, (): void => {
  console.log(`server started at localhost:${port}`);
});

export default app;
