import styled from 'styled-components'
import { mainColor, textColor } from '../../styles/colors';
import React from 'react'

export const Input = styled.input<InputProps>`
    width: ${({width}) => width || '100%'};
    height: ${({height}) => height || '100%'};
    padding: 1% 4vmax;
    border: none;
    border-radius: ${({borderRadius}) => borderRadius || '8px'};
    background: var(--second-bg-color);
    color: ${({color}) => color || 'var(--text-color)'};
    font-size: ${({fontSize}) => fontSize || '14px'};
    font-family: 'Exo 2';
    outline: 1px solid var(--second-bg-color);
    font-weight: var(--fw-medium);
    transition: all 0.1s ease-out;
    &:focus {
        outline: 2px solid var(--second-text-color);
    }
    &:hover {
        outline: 2px solid var(--second-text-color);
        
    }

    @media screen and (min-width: 900px){
        padding: 1% 2vmax;
        font-size: ${({fontSize}) => fontSize || '16px'};
    }

`
interface InputProps {
    width?: string;
    height?: string;
    background?: string;
    textAlign?: string;
    color?: string;
    fontSize?: string;
    borderRadius?: string;
}

