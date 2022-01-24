import React from 'react';
import './button.css';

type ButtonProps = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'disabled' | 'children'> & {
    children: React.ReactNode;
    isDisabled?: boolean;
};

function Button(props: ButtonProps) {
    const { onClick, isDisabled, children, ...rest } = props;
    return (
        <button {...rest} disabled={isDisabled} onClick={handleClick}>
            {children}
        </button>
    );
    function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
        if (onClick && !isDisabled) {
            onClick(event);
        }
    }
}

export default Button;
