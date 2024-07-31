import { Request, Response } from 'express';
import prisma from '../config/database';

export const createCliente = async (req: Request, res: Response) => {
  const { nome, email, dataAniversario } = req.body;
  try {
    const newCliente = await prisma.cliente.create({
      data: {
        nome,
        email,
        dataAniversario: new Date(dataAniversario),
      },
    });
    res.status(201).json(newCliente);
  } catch (err) {
    res.status(400).json({ message: err });
  }
};

// Outros métodos CRUD para Cliente...
