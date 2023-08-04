import styled from 'styled-components'
import { NavStyled } from './Styled/Nav/NavStyled'
import { UlStyled } from './Styled/Nav/UlStyled'
import { LiStyled } from './Styled/Nav/LiStyled';
import { Link } from 'react-router-dom';

interface Props {
    links: ILink[];

}

interface ILink {
    to: string;
    value: string;
}

export const Navbar: React.FC<Props> = ({links, ...props}) => {

    return (
        <NavStyled>
            <UlStyled>
                {links.map(link =>
                    <Link to={link.to}>{link.value}</Link>
                    )}
            </UlStyled>
        </NavStyled>
    )
}

