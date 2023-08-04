import styled, { IStyledComponent } from 'styled-components'
import { mainColor } from '../../styles/colors';
import { ReactElement } from 'react';
import { JsxElement } from 'typescript';


export const DivStyled = styled.div<DivProps>`
    width: ${({width}) => width || '100%'};
    height: ${({height}) => height || '100%'};
    background: ${({bakcground}) => bakcground|| 'transparent'};
    border-radius:  ${({borderRadius}) => borderRadius || '0'};
    padding:  ${({padding}) => padding || '0'};
    margin:  ${({margin}) => margin || '0'};
    border:  ${({border}) => border || 'none'};
    position:  ${({position}) => position};
    top:  ${({top}) => top || '0'};
    left:  ${({left}) => left || '0'};
    z-index: 100;
`
interface DivProps {
    width?: string;
    height?: string;
    bakcground?: string;
    borderRadius?: string; 
    padding?: string;
    margin?: string;
    border?: string;
    position?: string;
    top?: string;
    left?: string;
    children?: ReactElement;
}


export const Div: React.FC<DivProps> = ({children, ...props}) => {
    
    return (
        <DivStyled {...props}>
            {children}
        </DivStyled>
    )
}