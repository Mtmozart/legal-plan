import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function DELETE({ params }: { params: { id: string } }) {
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
    console.error('Erro ao excluir a tarefa:', error);
    return NextResponse.json({ message: 'Erro ao excluir a tarefa', error: (error as Error).message }, { status: 500 });
  }
}
