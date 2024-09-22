import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { ITask } from '@/types/task';

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const { task }: ITask = await req.json();
    
    const newTask = await prisma.task.create({
      data: { task }
    });

    return NextResponse.json({ message: 'Tarefa criada com sucesso', newTask });
  } catch (error) {
    return NextResponse.json({ message: 'Erro ao criar a tarefa', error: error.message }, { status: 500 });
  }
}


export async function GET(req: NextRequest) {
  try {
    const tasks = await prisma.task.findMany();
    return NextResponse.json(tasks);
  } catch (error) {
    return NextResponse.json({ message: 'Erro ao buscar as tarefas', error: error.message }, { status: 500 });
  }
}



