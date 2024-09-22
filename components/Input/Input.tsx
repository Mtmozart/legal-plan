import React from 'react';
import styles from './Input.module.scss';

interface TextInputProps {
  id: string;
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  placeholder: string;
}

const TextInput: React.FC<TextInputProps> = ({
  id,
  name,
  value,
  onChange,
  label,
  placeholder,
}) => {
  return (
    <div className={styles.textInput}>
      <label htmlFor={id}>{label}</label>
      <input
        type="text"
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextInput;
