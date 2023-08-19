import {IoChevronBackOutline} from 'react-icons/io5'
import { useNavigate } from 'react-router';
import { styled } from 'styled-components';

const BackStyled = styled(IoChevronBackOutline)<BackStyledProps>`
    width: ${({width}) => width || '33px'};
    height: ${({width}) => width || '33px'};
    cursor: pointer;
    color: var(--second-text-color );
    transition: all 0.2s ease-out;

    &:hover {
        color: var(--text-color );
    }

    @media screen and (min-width: 768px) {
        width: ${({width}) => width || '44px'};
        height: ${({width}) => width || '44px'};
    }
`

interface BackStyledProps {
    width?: string;
}

// interface Props {
//     back: () => void;
// }

export const Back: React.FC = () => {
    const navigate = useNavigate()
    return(
        <BackStyled onClick={() => navigate(-1)}>
        </BackStyled>
    )
}

