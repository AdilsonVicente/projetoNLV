import express from 'express';

import ItemsController from './controllers/ItemsController';
import PointsController from './controllers/PointsController';

// index, show, create, update, delete padroes crud comunidade

const routes = express.Router();
const itemController = new ItemsController();
const pointsController = new PointsController();

routes.get('/items', itemController.index);

routes.post('/points', pointsController.create);
routes.get('/points', pointsController.index);
routes.get('/points/:id', pointsController.show)

export default routes;