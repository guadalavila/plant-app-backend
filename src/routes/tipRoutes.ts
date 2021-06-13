import { Router } from 'express';
import { index } from '../controllers/tipController';

const router = Router();

router.route('/').get(index);

export { router as tipRoutes };
