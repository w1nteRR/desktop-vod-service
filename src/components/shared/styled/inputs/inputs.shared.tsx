import React, { FC, ChangeEvent } from 'react'

import { InputS } from './inputs.styled'

interface IInputProps {
    placeholder: string
    change(event: ChangeEvent<HTMLInputElement>): void
    type: string
    name?: string
    w?: string
    p?: string
}

export const Input: FC<IInputProps> = ({ placeholder, change, type, name, w, p }) =>
    <InputS 
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={change}
        shadow
        w={w}
        p={p}
    />