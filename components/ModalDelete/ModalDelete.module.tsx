"use client";

import React from 'react';
import styles from './ModalRemove.module.scss';
import Modal from '../Modal/Modal.module';

interface ModalDeleteScreenProps {
  isOpen: boolean;
  onClose: () => void;
  taskId: number; 
}

export function ModalDeleteScreen({ isOpen, onClose, taskId }: ModalDeleteScreenProps) {
  const handleAddClick = async () => {
    try {
      const response = await fetch(`/api/task/${taskId}`, {  
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Erro ao deletar a tarefa');
      }

      onClose();  
      window.location.reload();
    } catch (error) {
      console.error('Erro ao deletar a tarefa:', error);
    }
  };

  return (
    <Modal isOpen={isOpen}>
      <h2>Deletar tarefa</h2>
      <div className={styles.input__tarefa}>
        <p>Tem certeza que você deseja deletar essa tarefa?</p>
      </div>
      <div className={styles.buttons}>
        <button className={styles.button__cancel} onClick={onClose}>Cancelar</button>
        <button className={styles.button__delete} onClick={handleAddClick}>Deletar</button>
      </div>
    </Modal>
  );
}
