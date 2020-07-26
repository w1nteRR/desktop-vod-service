import React, { FC } from 'react'

import { Container } from '../../shared/utils/layout'
import { Title } from '../../shared/utils/typography'

import { CheckBoxTag } from '../../shared/styled/checkboxes/checkboxes.shared'

import { IFilter } from '../../../interfaces/filter/IFilter'

import { useSearch } from '../../../hooks/search/useSearch'

interface ISearchTagProps {
    title: string,
    data: Array<IFilter>
}

export const SearchTag: FC<ISearchTagProps> = ({ title, data }) => {
    
    const { handleBox } = useSearch()
    
    return (
        <Container direction='column' align='flex-start'>
            <Title color='#fff'>{title}</Title>
            <Container wrap={true}>
            {
                data.map(item => 
                    <Container w='50%' key={item.value}>
                        <CheckBoxTag 
                            value={item.value}
                            isChecked={item.checked} 
                            change={() => handleBox(title, item.id)}
                        />
                    </Container>
                )
            }
            </Container>
        </Container>

    )
}