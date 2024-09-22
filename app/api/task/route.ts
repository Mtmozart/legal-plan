import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { ITask } from '@/types/task';

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {   
    const body = await req.json();
    const task = body as ITask; 

    const newTask = await prisma.task.create({
      data: task
    });

    return NextResponse.json({ message: 'Tarefa criada com sucesso', newTask });
  } catch (error) {
    return NextResponse.json({ message: 'Erro ao criar a tarefa', error: error }, { status: 500 });
  }
}


export async function GET() {
  try {
    const tasks = await prisma.task.findMany();
    return NextResponse.json(tasks);
  } catch (error) {
    return NextResponse.json({ message: 'Erro ao buscar as tarefas', error: error }, { status: 500 });
  }
}



