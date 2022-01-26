import React from 'react';

type WrapperProps = {
    children: React.ReactNode;
    className?: string;
};

function Wrapper(props: WrapperProps) {
    return <div className={props.className}>{props.children}</div>;
}

export default Wrapper;
