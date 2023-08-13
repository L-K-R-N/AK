

import { changeOpenedFilters } from "../store/reducers/FilterSlice"

import { Wrapper } from "./Styled/Wrapper"
import Close from "./UI/Close"
import { ModalContainer } from "./Styled/Modal"
import FilterForm from "./FilterForm"
import { useAppDispatch, useAppSelector } from "../hooks/redux"


export const FilterModal: React.FC = () => {
    const dispatch = useAppDispatch()
    const {openedFilters} = useAppSelector(state => state.filterReducer)

    const closeModal = () => {
        dispatch(changeOpenedFilters(false))
    }
    return (
        <ModalContainer hidingState={openedFilters}>
            <Wrapper >
                <Close close={() => closeModal()}/>
                <FilterForm/>
            </Wrapper>
        </ModalContainer>
            
        
    )
}