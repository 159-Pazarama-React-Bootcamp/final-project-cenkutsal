import React from 'react';
import './textarea.css';

type TextareaProps = Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'onChange' | 'name'> & {
    onChange?: React.ReactEventHandler<HTMLTextAreaElement>;
    name: string;
};

function Textarea(props: TextareaProps) {
    return <textarea {...props} />;
}

export default Textarea;
