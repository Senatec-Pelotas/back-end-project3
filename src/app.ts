import express from 'express';
import bodyParser from 'body-parser';
import clientesRoutes from './routes/clientes';
import vendedoresRoutes from './routes/vendedores';
import produtosRoutes from './routes/produtos';
import vendasRoutes from './routes/vendas';

const app = express();

app.use(bodyParser.json());

app.use('/api/clientes', clientesRoutes);
app.use('/api/vendedores', vendedoresRoutes);
app.use('/api/produtos', produtosRoutes);
app.use('/api/vendas', vendasRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
