import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import styles from './Modal.module.scss'

interface ModalProps {
  isOpen: boolean;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, children }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isOpen || !isClient) return null;

  return ReactDOM.createPortal(
    <div className={styles.modal__overlay}>
      <div className={styles.modal__content}>
        {children}
      </div>
    </div>,
    document.body
  );
};

export default Modal;
