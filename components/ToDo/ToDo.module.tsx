"use client";

import { useEffect, useState } from 'react';
import Button from '../Button/Button.module';
import { ModalAddScreen } from '../ModalAdd/ModalAdd.module';
import { ToDoCard } from '../ToDoCard/ToDoCard.module';
import styles from './ToDo.module.scss';
import { ITaskData } from '@/types/task';

export function ToDoScreen() {
  const [isAddModalOpen, setIsAddModalOpen] = useState<boolean>(false);
  const [tasks, setTasks] = useState<ITaskData[]>([]);

  const openAddModal = () => setIsAddModalOpen(true);
  const closeAddModal = () => setIsAddModalOpen(false);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch('/api/task');
        if (!response.ok) {
          throw new Error('Erro ao buscar tarefas');
        }
        const data = await response.json();
        setTasks(data as ITaskData[]);
      } catch (error) {
        console.error('Erro ao buscar tarefas:', error);
      }
    };

    fetchTasks();
  }, []);
  
  return (
    <>
      <section className={styles.toDo__container_all}>
        <div className={styles.toDo__container}>
          <div className={styles.title__top}>
            <p>Suas tarefas de hoje</p>
          </div>
          <div className={styles.toDo_cards}>
            {tasks.filter(task => !task.done).map(task => (
              <ToDoCard 
                key={task.id} 
                id={task.id} 
                task={task.task} 
                done={task.done} 
              />
            ))}
          </div>
          <div className={styles.title__top}>
            <p>Tarefas finalizadas</p>
          </div>
          <div className={styles.toDo_cards}>
            {tasks.filter(task => task.done).map(task => (
              <ToDoCard 
                key={task.id} 
                id={task.id} 
                task={task.task} 
                done={task.done} 
              />
            ))}
          </div>
        </div>
        <Button label={'Adicionar nova tarefa'} onClick={openAddModal} />
        <ModalAddScreen isOpen={isAddModalOpen} onClose={closeAddModal} />        
      </section>
    </>
  );
}
