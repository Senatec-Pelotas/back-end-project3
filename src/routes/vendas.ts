import { Router } from 'express';
import * as vendaController from '../controllers/vendaController';

const router = Router();

router.post('/', vendaController.createVenda);
// Outras rotas para Venda...

export default router;
