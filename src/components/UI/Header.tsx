
import { FlexStyled } from "../Styled/FlexStyled"
import { HeaderStyled } from "../Styled/HeaderStyled"
import { InputStyled } from "../Styled/InputStyled"
import { WrapperStyled } from "../Styled/WrapperStyled"
import { Logo } from "./Logo"
import { GridStyled } from "../Styled/GridStyled"
import { ImgStyled } from "../Styled/ImgStyled"
import {LuSettings2} from 'react-icons/lu'
import {RiAccountCircleLine} from 'react-icons/ri'
import { UlStyled } from "../Styled/Nav/UlStyled"
import { NavStyled } from "../Styled/Nav/NavStyled"
import { LiStyled } from "../Styled/Nav/LiStyled"
import { Link } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../hooks/redux"
import { changeOpenedFilters } from "../../store/reducers/FilterSlice"
interface Props {
    onClick?: () => void
}


export const Header: React.FC<Props> = ({...props}) => {
    const dispatch = useAppDispatch()
    const {openedFilters} = useAppSelector(state => state.filterReducer)
    const openFilters = () => {
        console.log(openedFilters)
        dispatch(changeOpenedFilters(true))
    }

    return (
        <HeaderStyled {...props}>
            <WrapperStyled>
               <FlexStyled>
                <GridStyled templateColumns={'1fr 7fr 1fr'} height="90%" gap="1vw"> 
                        <FlexStyled>
                            <Logo />

                        </FlexStyled>
                        <FlexStyled>
                            <InputStyled
                                type="text" 
                                placeholder="Начать поиск" 
                                height="70%" 
                                borderRadius="90px" 
                                padding="1% 4%" 
                                border="none" />
                        </FlexStyled>
                        <FlexStyled>
                            <NavStyled>
                                <UlStyled>
                                    <LiStyled onClick={() => openFilters()}>
                                        <LuSettings2 width={'100%'} height={'100%'}/>
                           
                                    </LiStyled>
                                    <Link to={'profile'}>
                                        <RiAccountCircleLine/>
                                    </Link>
                                </UlStyled>
                            </NavStyled>
                            {/* <ImgStyled src={require('../../img/svg/settings.svg').default} height="70%" cursor="pointer" /> */}
                        </FlexStyled>
                    </GridStyled>
               </FlexStyled>
            </WrapperStyled>
        </HeaderStyled>
    )
}