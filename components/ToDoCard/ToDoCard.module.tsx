"use client";

import React, { useState, useEffect } from 'react';
import styles from './ToDoCard.module.scss';
import { FiTrash } from "react-icons/fi";
import { ModalDeleteScreen } from '../ModalDelete/ModalDelete.module';
import { ITaskData } from '@/types/task';

type ToDoCardProps = ITaskData

export function ToDoCard({ id, task, done }: ToDoCardProps) {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = React.useState<boolean>(false);
  const openDeleteModal = () => setIsDeleteModalOpen(true);
  const closeDeleteModal = () => setIsDeleteModalOpen(false);
  const [isChecked, setIsChecked] = useState(done);

  const checkHandler = () => {
    setIsChecked(!isChecked);
  };

  useEffect(() => {
    const updateTaskStatus = async () => {
      try {
        const response = await fetch(`/api/task/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ done: isChecked }),
        });
        
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || 'Erro ao atualizar a tarefa');
        }
        window.location.reload();
        console.log('Tarefa atualizada com sucesso', data);
      } catch (error) {
        console.error('Erro ao atualizar a tarefa:', error);
      }
    };

    if (isChecked !== done) { 
      updateTaskStatus();
    }
  }, [isChecked]); 

  return (
    <section className={styles.card__container}>
      <div className={styles.card__content}>
        <div className={styles.card__text__input}>
          <div className={styles.card__checkbox}>
            <input
              type="checkbox"
              id={`checkbox-${id}`}
              checked={isChecked}
              onChange={checkHandler}
              className={styles.checkbox}
            />
            <label htmlFor={`checkbox-${id}`} className={styles.customCheckbox}>
              {isChecked && <span className={styles.checkmark}>✓</span>}
            </label>
          </div>
          <div className={`${styles.card__text} ${isChecked ? styles.checkedText : ''}`}>
            {task}
          </div>
        </div>
        <div>
          <FiTrash className={styles.trashIcon} onClick={openDeleteModal} />
        </div>
      </div>
      <ModalDeleteScreen 
        isOpen={isDeleteModalOpen} 
        onClose={closeDeleteModal} 
        taskId={id}  
      />
    </section>
  );
}
