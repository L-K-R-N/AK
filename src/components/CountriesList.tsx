


import { styled } from "styled-components"


import { Card } from './Card'
import { useNavigate } from 'react-router'

import { ICountry } from '../models/ICountry'



export const CountriesCards = styled.div`
    display: grid;
    width: 100%;
    grid-template-columns: repeat(1, 1fr);
    gap: 8vh;

    @media screen and (min-width: 700px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (min-width: 1100px) {
        grid-template-columns: repeat(3, 1fr);
    }
`
interface Props {
    countries: ICountry[];
}


export const CountriesList: React.FC<Props> = ({countries}) => {
    
    
    
    
    const navigate = useNavigate()
    
    
    return (
        <CountriesCards >
        
        {countries.map(country => (
                
                <Card 
                    click={() => navigate(`/countries/${country.name.common}`)}
                    key={country.name.official}
                    capitals={country.capital}
                    officialName={country.name.official}
                    status={country.status}
                    population={country.population}  
                    name={country.name.common} 
                    src={country.flags.svg}
                    alt={country.flags.alt}></Card>)
            )}
        
        </CountriesCards>
        
    )
}