import React from 'react';
import './admin-page-button.css';

type AdminPageButtonProps = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children'> & {
    children: React.ReactNode;
};

function AdminPageButton(props: AdminPageButtonProps) {
    const { children, ...rest } = props;
    return <button {...props}>{children}</button>;
}

export default AdminPageButton;
