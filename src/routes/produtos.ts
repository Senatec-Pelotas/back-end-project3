import { Router } from 'express';
import * as produtoController from '../controllers/produtoController';

const router = Router();

router.post('/', produtoController.createProduto);
// Outras rotas para Produto...

export default router;
