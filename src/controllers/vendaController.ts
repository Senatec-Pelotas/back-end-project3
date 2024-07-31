import { Request, Response } from 'express';
import prisma from '../config/database';

export const createVenda = async (req: Request, res: Response) => {
  const { vendedorId, clienteId, produtos } = req.body;
  try {
    const newVenda = await prisma.venda.create({
      data: {
        vendedorId,
        clienteId,
        dataVenda: new Date(),
        total: produtos.reduce((acc, produto) => acc + produto.preco * produto.quantidade, 0),
        confirmada: false,
        vendaProdutos: {
          create: produtos.map(produto => ({
            produtoId: produto.id,
            quantidade: produto.quantidade,
            preco: produto.preco,
          })),
        },
      },
    });
    res.status(201).json(newVenda);
  } catch (err) {
    res.status(400).json({ message: err });
  }
};

// Outros métodos para Venda...
