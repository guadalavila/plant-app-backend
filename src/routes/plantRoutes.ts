import { Router } from 'express';
import { index } from '../controllers/plantController';

const router = Router();

router.route('/').get(index);

export { router as plantRoutes };
