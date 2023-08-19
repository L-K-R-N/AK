import React from 'react'
import Search from './Search'
import { GridStyled } from './Styled/Grid/GridStyled'
import Filter from './Filter'
import { FilterModal } from './FilterModal'
import { CustomSelect } from './UI/CustomSelect'
import { countriesOptions } from '../forms/selects/options/AddressOptions'
import Sort from './Sort'
import { styled } from 'styled-components'

const SearchAndFilterContainer = styled.div`
    display: grid;
    grid-template-columns: 5fr 7vh;
    grid-template-rows: 7vh;
    gap: 2%;
    width: 100%;

    @media screen and (min-width: 768px) {
        grid-template-columns: 5fr 2fr 7vh;    
    }
    @media screen and (min-width: 1200px) {
        grid-template-columns: 5fr 1fr 7vh;    
    }
`
const SortContainer = styled.div`
    width: 100%;
    height: 100%;
    display: none;

    @media screen and (min-width: 768px) {
        display: block;
    }
`


export const SearchAndFilter: React.FC = () => {
    
    return(
        <SearchAndFilterContainer>
            <Search/>
            <SortContainer>
                <Sort/>
            </SortContainer>
            <Filter/>
            <FilterModal/>
            {/* <CustomSelect/> */}
            {/* <Filter/>
            <FilterModal/> */}
        </SearchAndFilterContainer>
    )
}

export default SearchAndFilter