import { Router } from 'express';
import * as clienteController from '../controllers/clienteController';

const router = Router();

router.post('/', clienteController.createCliente);
// Outras rotas para Cliente...

export default router;
