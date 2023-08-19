
import {useEffect} from 'react'
import { Header } from '../components/Header'
import FilterForm from '../components/FilterForm'
import { Back } from '../components/UI/Back'
import { Wrapper } from '../components/Styled/Wrapper'


export const FiltersPage: React.FC = () => {
    

    return (
        <div>
            <Header/>
            <Wrapper>
                <Back/>
                <FilterForm/>
            </Wrapper>
        </div>
    )
}