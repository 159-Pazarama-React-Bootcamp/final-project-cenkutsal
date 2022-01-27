import React from 'react';
import './input.css';

export type InputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'name'> & {
    onChange?: React.ReactEventHandler<HTMLInputElement>;
    name: string;
};
function Input(props: InputProps) {
    return <input {...props} />;
}

export default Input;
