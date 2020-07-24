import React, { FC, ChangeEvent } from 'react'

import { Input } from './inputs.styled'

interface IInputProps {
    placeholder: string
    change(event: ChangeEvent<HTMLInputElement>): void
}

export const InputSearch: FC<IInputProps> = ({ placeholder, change }) =>
    <Input 
        placeholder={placeholder}
        onChange={change}
        shadow
    />