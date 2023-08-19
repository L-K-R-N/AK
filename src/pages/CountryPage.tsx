import { matchPath, useMatch, useMatches, useNavigate, useParams } from "react-router"
import { DivStyled } from "../components/Styled/DivStyled"
import { Header } from "../components/Header"
import {useEffect }from 'react'
import { countriesAPI } from "../services/CountriesService"
import { Loader } from "../components/UI/Loader"
import { styled } from "styled-components"
import { Wrapper } from "../components/Styled/Wrapper"
import { ImgStyled } from "../components/Styled/ImgStyled"
import { Country } from "../components/Country"




export const CountryPage: React.FC = () => {
    
    return (
        <div>
            <Header/>
            <Country/>
            
        </div>
    )
}