import styled from 'styled-components'
import { mainColor, textColor } from '../../styles/colors';
import React from 'react'

export const Input = styled.input<InputProps>`
    width: ${({width}) => width || '100%'};
    height: ${({height}) => height || '100%'};
    padding: 1% 2vmax;
    border: none;
    border-radius: ${({borderRadius}) => borderRadius || '8px'};
    background: var(--second-bg-color);
    color: ${({color}) => color || 'var(--second-text-color)'};
    font-size: ${({fontSize}) => fontSize || '14px'};
    font-family: 'Exo 2';
    font-weight: 100;

    &:focus {
        border: none;
        outline: none;
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

