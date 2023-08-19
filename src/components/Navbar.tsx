import styled from 'styled-components'

import { Link } from 'react-router-dom';

interface Props {
    links: ILink[];

}

interface ILink {
    to: string;
    value: string;
}

const Nav = styled.nav`
    width: 100%;
    height: 100%;

`
const Ul = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-around;
    width: 100%;
    height: 100%;
    
`
const Li = styled.li`

`
const LinkStyled = styled(Link)`
    color: var(--text-color);
    text-decoration: none;
    font-size: 100%;
`


export const Navbar: React.FC<Props> = ({links, ...props}) => {

    return (
        <Nav>
            <Ul>
                {links.map(link =>
                    <Li><LinkStyled to={link.to}>{link.value}</LinkStyled></Li>
                    )}
            </Ul>
        </Nav>
    )
}

