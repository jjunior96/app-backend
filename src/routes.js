import { Router } from 'express';
import multer from 'multer';
import uploadConfig from './config/upload';

import ItemController from './controllers/ItemController';

const routes = new Router();
const upload = multer(uploadConfig);

routes.get('/itens', ItemController.index);
routes.post('/itens', upload.single('image'), ItemController.store);

export default routes;
