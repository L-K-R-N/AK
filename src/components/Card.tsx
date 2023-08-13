import { styled } from "styled-components"
import { GridItemStyled } from "./Styled/Grid/GridItemStyled"
import { GridStyled } from "./Styled/Grid/GridStyled"
import { ImgStyled } from "./Styled/ImgStyled"
import { ICountry } from "../models/ICountry"
import { useNavigate } from "react-router"
import {AiFillHeart, AiOutlineHeart} from 'react-icons/ai'
import {useState} from 'react'
import { Like } from "./UI/Like"
const CardContainer = styled.div`
    display: grid;
    overflow: hidden;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(5, 1fr);
    border-radius: 4px 4px 20px 20px;
    width: 100%;
    height: 35vh;
    box-shadow: var(--shadow);
    /* padding: 2px; */
    background: #2a2a2a;
    border: 3px solid var(--second-bg-color);
    cursor: pointer;
`


export const CardElement = styled.div<CardElementProps>`
    display: flex;
    cursor: pointer;
    opacity: ${({opacity}) => opacity};
    align-items: ${({align}) => align || 'center'};
    justify-content: ${({justify}) => justify || 'center'};
    flex-direction: ${({direction}) => direction};
    
    grid-area: ${({gridArea}) => gridArea};
    background: ${({background}) => background};
    z-index: ${({zIndex }) => zIndex || 10};
    transition: opacity 0.3s ease-out;
    box-shadow: var(--shadow);
    backdrop-filter: blur(${({blur}) => blur});
    padding: ${({padding}) => padding || '0'};
    &:hover {
        opacity: ${props => props.hoverOpacity || 1};
        display: ${props => props.hoverNone ? 'none' : 'flex'};
    }
`

export interface CardElementProps {
    background?: string;
    opacity?: number;
    hoverOpacity?: number;
    gridArea: string;
    align?: string;
    justify?: string;
    direction?: string;
    zIndex?: number;
    blur?: string;
    transition?: string;
    hoverNone?: boolean;
    padding?: string;
}

const CardTitle = styled.h4<CardTitleProps>`
    color: ${({color}) => color || 'var(--text-color)'};
    font-size: 180%;
    font-weight: var(--fw-medium);
`

interface CardTitleProps {
    color?: string;
}

const CardText = styled.p<CardTextProps>`
    font-size: 120%;
    letter-spacing: 1px;
    color: ${({color}) => color || 'var(--text-color)'};
`

interface CardTextProps {
    color?: string;
}




interface Props {
    name: string;
    capitals: string[] | undefined;
    population: number;
    officialName: string;
    status: string | undefined;
    src: string;
    alt: string;
    click: () => void;
}

export const Card: React.FC<Props> = ({
    name, 
    capitals, 
    population, 
    officialName,
    status,
    src, 
    alt, 
    click
    }) => {

    
    const [like, setLike] = useState<boolean>(false)
    const navigate = useNavigate()
    return (
       <CardContainer onClick={() => click()}>
            <CardElement 
                background="var(--second-bg-color)"
                gridArea={'1 / 1 / 2 / 5'} 
                justify="space-between"
                padding=" 0 20px"
            >
                <CardTitle>{name}</CardTitle>
                <Like countryOfficialName={officialName} like={like} setLike={setLike}/>
                {/* <AiOutlineHeart  height={'100%'} style={{height: '100%', width: '33px', color: 'var(--red-color)'}}/> */}
                {/* <ImgStyled width={'96%'} height="96%" src={src} alt="" /> */}
            </CardElement>
             <CardElement 
            
            hoverOpacity={0}
            gridArea={'2 / 1 / 6 / 5'} 
            // hoverNone={true}

            >
                <ImgStyled cursor="pointer" src={src} alt={alt} />
            </CardElement>
            
            <CardElement 
                zIndex={100}
                padding="2%"
                background="var(--blur-color)"
                blur="10px"
                gridArea={'2 / 1 / 6 / 5'} 
                direction="column"
                align="center"
                justify="space-around"
                opacity={0}
                hoverOpacity={1}
            >
                <CardText>Official name: {officialName}</CardText>
                <CardText>
                    {capitals 
                        ? `Capitals: ${capitals?.map(capital => capital)}`
                        : '-'
                            
                    }
                </CardText>
                <CardText>Population: {population}</CardText>
                <CardText>Status: {status ? status : '---'}</CardText>
                
            </CardElement>

       </CardContainer>
    )
}