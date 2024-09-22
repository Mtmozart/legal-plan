/* eslint-disable */

import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const id = parseInt(params.id, 10);
    if (isNaN(id)) {
      return NextResponse.json({ message: 'ID inválido' }, { status: 400 });
    }   
    const deletedTask = await prisma.task.delete({
      where: { id },
    });

    return NextResponse.json({ message: 'Tarefa excluída com sucesso', deletedTask });
  } catch (error) {
    return NextResponse.json({ message: 'Erro ao excluir a tarefa', error: error }, { status: 500 });
  }
}


export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  try {

    const id = parseInt(params.id, 10);
    if (isNaN(id)) {
      return NextResponse.json({ message: 'ID inválido' }, { status: 400 });
    }
    
    const task = await prisma.task.findUnique({
      where: { id },
    });

    if (!task) {
      return NextResponse.json({ message: 'Tarefa não encontrada' }, { status: 404 });
    }
    const updatedTask = await prisma.task.update({
      where: { id },
      data: { done: !task.done },
    });
    return NextResponse.json({ message: 'Tarefa atualizada com sucesso', updatedTask });
  } catch (error) {
    return NextResponse.json({ message: 'Erro ao atualizar a tarefa', error: error }, { status: 500 });
  }
}
