import { useMatch, useNavigate } from "react-router"
import { DivStyled } from "../components/Styled/DivStyled"
import { Header } from "../components/Header"

export const AttractionPage: React.FC = () => {
    const match = useMatch('huiyiyi')
    const navigate = useNavigate()
    return (
        <div>
            <Header/>
            <DivStyled >
                <h3 style={{color: 'white'}} onClick={() => console.log(match)}>ПРЕДЫДУЩАЯ</h3>
                <h3 style={{color: 'white'}} onClick={() => navigate(`/attractions/2`)}>СЛЕДУЮЩАЯ</h3>
            </DivStyled>
        </div>
    )
}