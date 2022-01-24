import React from 'react';
import './_input.css';

export type InputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'name'> & {
    onChange?: React.ReactEventHandler<HTMLInputElement>;
    name: string;
};
function Input(props: InputProps) {
    return <input className="input" {...props} />;
}

export default Input;
