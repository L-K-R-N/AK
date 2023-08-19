import React from 'react'
import { FlexStyled } from './Styled/FlexStyled'
import { LuSettings2 } from 'react-icons/lu'
import { FilterModal } from './FilterModal'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { changeOpenedFilters } from '../store/reducers/FilterSlice'
import { styled } from 'styled-components'
import { FilterIco } from './UI/FilterButton'

const IconContainer = styled.div<IconContainerProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({background}) => background || 'var(--second-bg-color)'};
    border-radius: 99px;
    cursor: pointer;
`

interface IconContainerProps {
    background?: string;

}

export const Filter = () => {

    return(
        <FilterIco/>
    )
}

export default Filter 