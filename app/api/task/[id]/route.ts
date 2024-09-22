import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function DELETE(request: NextRequest) {
  try {
    const url = new URL(request.url);
    const id = url.pathname.split('/').pop(); 
    
    if (!id || isNaN(Number(id))) {
      return NextResponse.json({ message: 'ID inválido' }, { status: 400 });
    }

    const deletedTask = await prisma.task.delete({
      where: { id: parseInt(id, 10) },
    });

    return NextResponse.json({ message: 'Tarefa excluída com sucesso', deletedTask });
  } catch (error) {
    console.error('Erro ao excluir a tarefa:', error);
    return NextResponse.json({ message: 'Erro ao excluir a tarefa', error: (error as Error).message }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {

    const url = new URL(request.url);
    const id = url.pathname.split('/').pop(); 

    if (!id || isNaN(Number(id))) {
      return NextResponse.json({ message: 'ID inválido' }, { status: 400 });
    }
    
    const task = await prisma.task.findUnique({
      where: { id: parseInt(id, 10) },
    });

    if (!task) {
      return NextResponse.json({ message: 'Tarefa não encontrada' }, { status: 404 });
    }
    const updatedTask = await prisma.task.update({
      where: { id: parseInt(id, 10) },
      data: { done: !task.done },
    });
    return NextResponse.json({ message: 'Tarefa atualizada com sucesso', updatedTask });
  } catch (error) {
    return NextResponse.json({ message: 'Erro ao atualizar a tarefa', error: error }, { status: 500 });
  }
}