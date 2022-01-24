import React from 'react';
import Input, { InputProps } from '../input/Input';

type NumberInputProps = Omit<InputProps, 'type'>;

function NumberInput(props: NumberInputProps) {
    return <Input type="number" {...props} />;
}

export default NumberInput;
