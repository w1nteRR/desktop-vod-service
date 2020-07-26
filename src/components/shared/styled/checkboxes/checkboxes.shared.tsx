import React, { FC, ChangeEvent } from 'react'

import { CheckBoxTagS } from './checkboxes.styles'

import { Text } from '../../utils/typography'

interface CheckBoxProps {
    value: string | number,
    isChecked: boolean,
    change(): any
}

export const CheckBoxTag: FC<CheckBoxProps> = ({ value, isChecked, change }) => 
    <CheckBoxTagS>
        <label>
            <input 
                type='checkbox' 
                checked={isChecked} 
                onChange={change} 
            />
            <Text uppercase>{value}</Text>
        </label>
    </CheckBoxTagS>
