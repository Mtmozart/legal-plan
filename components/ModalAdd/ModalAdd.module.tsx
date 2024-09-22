import React, { useState } from 'react';
import styles from './ModalAdd.module.scss';
import Modal from '../Modal/Modal.module';
import TextInput from '../Input/Input';

interface ModalAddScreenProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ModalAddScreen({ isOpen, onClose }: ModalAddScreenProps) {
  const [task, setTask] = useState<string>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTask(event.target.value);
  };

  const handleAddClick = async () => {
    try {
      const response = await fetch('/api/task', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ task }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log('Nova tarefa adicionada:', data);

      onClose();
      setTask('');
      window.location.reload();
    } catch (error) {
      console.error('Erro ao chamar a API:', error);
    }
  };

  return (
    <Modal isOpen={isOpen}>
      <h2>Nova tarefa</h2>
      <div className={styles.input__tarefa}>
        <TextInput
          id="taskInput"
          name="task"
          value={task}
          onChange={handleInputChange}
          label="Tarefa"
          placeholder="Digite a tarefa"
        />
      </div>
      <div className={styles.buttons}>
        <button className={styles.button__cancel} onClick={onClose}>Cancelar</button>
        <button className={styles.button__create} onClick={handleAddClick}>Adicionar</button>
      </div>
    </Modal>
  );
}
