import React from 'react'
import Search from './Search'
import { GridStyled } from './Styled/Grid/GridStyled'
import Filter from './Filter'
import { FilterModal } from './FilterModal'
import { CustomSelect } from './UI/CustomSelect'
import { countriesOptions } from '../forms/selects/options/AddressOptions'
import Sort from './Sort'


export const SearchAndFilter: React.FC = () => {
    
    return(
        <GridStyled templateColumns='8fr 2fr 1fr' gap='2%' height='7vh'>
            <Search/>
            <Sort/>
            <Filter/>
            <FilterModal/>
            {/* <CustomSelect/> */}
            {/* <Filter/>
            <FilterModal/> */}
        </GridStyled>
    )
}

export default SearchAndFilter