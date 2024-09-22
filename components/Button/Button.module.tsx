import React from 'react';
import styles from './Button.module.scss'; 

interface ButtonProps {
  onClick?: () => void;
  label: string;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, label, type = 'button', className = '', ...props }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`${styles.button} ${className}`} 
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;
