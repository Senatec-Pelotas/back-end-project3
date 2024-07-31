import { Router } from 'express';
import * as vendedorController from '../controllers/vendedorController';

const router = Router();

router.post('/', vendedorController.createVendedor);
// Outras rotas para Vendedor...

export default router;
