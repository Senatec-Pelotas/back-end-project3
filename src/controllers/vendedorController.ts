import { Request, Response } from 'express';
import prisma from '../config/database';

export const createVendedor = async (req: Request, res: Response) => {
  const { nome, email } = req.body;
  try {
    const newVendedor = await prisma.vendedor.create({
      data: {
        nome,
        email,
      },
    });
    res.status(201).json(newVendedor);
  } catch (err) {
    res.status(400).json({ message: err });
  }
};

// Outros métodos CRUD para Vendedor...
