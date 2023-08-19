import {  useParams } from "react-router"
import { DivStyled } from "../components/Styled/DivStyled"
import {useEffect }from 'react'
import { countriesAPI } from "../services/CountriesService"
import { Loader } from "../components/UI/Loader"
import { styled } from "styled-components"
import { Wrapper } from "../components/Styled/Wrapper"
import { ImgStyled } from "../components/Styled/ImgStyled"
import {useJsApiLoader} from '@react-google-maps/api'
import { YandexMap } from "./YandexMap"
import { Back } from "./UI/Back"
import { useAppSelector } from "../hooks/redux"
import { FlexStyled } from "./Styled/FlexStyled"
import { Like } from "./UI/Like"



const CountryContent = styled.div`
    width: 100%;
    display: grid;
    /* flex-direction: column;
    align-items: center;
    justify-content: space-between; */
    grid-template-columns: repeat(1, 100%);
    grid-template-rows: 35vh 7vh 1fr;

    margin-top: 2%;
    /* margin-bottom: 3vh; */

    @media screen and (min-width: 767px) {
        /* flex-direction: row; */
        
        grid-template-columns:  2fr 4vw 3fr;
        grid-template-rows: 40vh;
        margin-bottom: 10vh;
    }
    @media screen and (min-width: 1080px) {
        /* flex-direction: row; */
        
        grid-template-columns:  2fr 4vw 3fr;
    }
`

const CountryContentElement = styled.div<CountryContentElementProps>`
    grid-area: ${({area}) => area};
    border-radius: ${({radius}) => radius};
`

interface CountryContentElementProps {
    area?: string;
    radius?: string;
}

const CountryContainer = styled.div<CountryContainerProps>`
    width: 100vw;
    margin: ${({margin}) => margin};
`

interface CountryContainerProps {
    margin?: string;
}
const Flag = styled.div<FlagProps>`
    /* width: ${({width}) => width || '100%'};
    height:${({height}) => height || '100%'}; */
    grid-area: 1 / 1 / 2 / 2;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: var(--shadow);
    z-index: 100;
    
    opacity: 1;
    transition: all 0.3s ease-out;

    &:hover {
        opacity: 0;
    }

    @media screen and (min-width: 767px) {
        /* width: 80%; */
    }
`

interface FlagProps {
    width?: string;
    height?: string;
}

const CoatOfArms = styled.div`
    grid-area: 1 / 1 / 2 / 2;
    
`

const Title = styled.h2`
    text-align: center;
    color: var(--text-color);
    font-size: 140%;
    font-weight: var(--fw-demi-bold);
    @media screen and (min-width: 1080px) {
        font-size: 200%;
    }   
`
const SubTitle = styled.h3`
    color: var(--text-color);
    font-size: 120%;
    text-align: center;
    font-weight: var(--fw-medium);

    @media screen and (min-width: 1080px) {
        font-size: 160%;
    }   
`
const Desc = styled.div`
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    max-width: 100%;
`

const Text = styled.p`

    color: var(--text-color);
    font-size: 80%;
    text-align: center;
    @media screen and (min-width: 1080px) {
        font-size: 120%;
    }   
`

const CountryMap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30vh;
    width: 100%;
    
    @media screen and (min-width: 767px) {
        height: 70vh;
        
    }   
    
`
const MapContainer = styled.div`
    height: 100%;
    width: 100%;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: var(--shadow);
    
    
`


const CountryContentFlag = styled.div`
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 100%;
    /* display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: start; */
    padding-bottom: 10px;
    padding-right: 0;
    /* grid-column: 1 / 2; */

    @media screen and (min-width: 767px){
        padding-bottom: 0;
        padding-right: 10px;
        /* flex-direction: row;
        justify-content: space-between;
        align-items: start; */
        /* grid-column: 1 / 3; */
    }
`

const Stats = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    border: 2px solid var(--second-text-color);
    border-left: none;
    border-right: none;
    border-top: none;

    @media screen and (min-width: 767px) {

        flex-direction: column;
        
        border: 2px solid var(--second-text-color);
        border-top: none;
        border-bottom: none;
        border-left: none;
    }
`

const CountryContentDesc = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(4, 1fr);
    padding: 10px;
    /* flex-direction: column;
    justify-content: space-between; */
    /* grid-column: 1 / 2; */
    /* align-items: center; */
    @media screen and (min-width: 767px){
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, 1fr);
    }
`

const Borders = styled.div`

`

const TextColor = styled.span<TextColorProps>`
    color: ${({color}) => color};
`
interface TextColorProps {
    color: string;
}

export const Country: React.FC = () => {
    
    
    const {name} = useParams() 
    const {data: countries, isSuccess, isLoading, isError} = countriesAPI.useFetchCountryByNameQuery(name)
    useEffect(() => {
        // console.log(country[0].name.common)
        // console.log(params)
        console.log(countries)
        // const country = countries[0]
    }, [isSuccess])
    // const borderCountries = useGetCountriesByCodes(countries[0])
    
    

    return (
        <CountryContainer margin="0 0 5vh 0">
             <Wrapper >
                {isLoading && 
                <FlexStyled>
                        <Loader/>
                </FlexStyled>}
                {isError && <h3>Error</h3>}  
                {countries && 
                    <DivStyled key={countries[0].name.official}>
                        <Back/>
                        <CountryContent>
                            
                            <CountryContentFlag>
                                
                                    <Flag>
                                        <ImgStyled cursor="pointer" src={countries[0].flags.svg} alt={countries[0].flags.alt}/>

                                    </Flag>
                                    <CoatOfArms>
                                        <ImgStyled objectFit="contain" src={countries[0].coatOfArms.svg} alt={countries[0].flags.alt}/>
                                    </CoatOfArms>
                            </CountryContentFlag>
                            <Stats>
                                <Like countryOfficialName={countries[0].name.official}/>
                            </Stats>
                            <CountryContentDesc>
                                <FlexStyled direction="column">
                                    <Title>{countries[0].name.official}</Title>
                                    <SubTitle>{countries[0].name.common}</SubTitle>
                                </FlexStyled>
                                    {/* <Text>Герб:</Text>
                                    <CoatOfArms>
                                        <ImgStyled objectFit="auto" src={country.coatOfArms.svg} alt={country.flags.alt}/>
                                    </CoatOfArms> */}
                                <Desc>
                                    <Text>Статус: <TextColor color="var(--yellow-color)">{countries[0].status}</TextColor></Text>
                                    <Text>Столица: <TextColor color="var(--yellow-color)">{countries[0].capital} </TextColor></Text>
                                    <Text>Территория: <TextColor color="var(--yellow-color)">{countries[0].area}</TextColor></Text>
                                    
                                    {/* <Text>Часовые пояса:</Text> {country.timezones.map(timezone => 
                                        <Text>{timezone}</Text>
                                    )} */}
                                    
                                    {/* <Borders>
                                    {country.borders?.map(border =>
                                        <span>{border} </span>
                                    )}
                                    </Borders> */}
                                </Desc>
                                <Desc>
                                    
                                    <Text>Население: <TextColor color="var(--green-color)">{countries[0].population}</TextColor></Text>
                                    <Text>Регион: <TextColor color="var(--green-color)">{countries[0].region}</TextColor></Text>
                                </Desc>
                                <Desc>
                                    
                                    <Text>Начало недели: <TextColor color="var(--purple-color)">{countries[0].startOfWeek}</TextColor></Text>
                                    <Text>Сторона дорожного движения: <TextColor color="var(--purple-color)">{countries[0].car.side}</TextColor></Text>
                                </Desc>
                                
                            </CountryContentDesc>

                        </CountryContent>
                        <CountryMap>
                            <MapContainer>
                                <YandexMap center={countries[0].latlng}/>
                            </MapContainer>
                        </CountryMap>
                    </DivStyled>
}
           </Wrapper>
        </CountryContainer>
          


    )
}