import { Request, Response } from 'express';
import prisma from '../config/database';

export const createProduto = async (req: Request, res: Response) => {
  const { nome, descricao, preco, estoque } = req.body;
  try {
    const newProduto = await prisma.produto.create({
      data: {
        nome,
        descricao,
        preco,
        estoque,
      },
    });
    res.status(201).json(newProduto);
  } catch (err) {
    res.status(400).json({ message: err });
  }
};

// Outros métodos CRUD para Produto...
