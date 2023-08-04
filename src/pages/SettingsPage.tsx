import {MdOutlineDarkMode, MdOutlineLightMode} from 'react-icons/md'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { changeTheme } from '../store/reducers/ThemeSlice'
import {useEffect} from 'react'
export const SettingsPage: React.FC = () => {
    const dispatch = useAppDispatch()
    const {currentTheme} = useAppSelector(state => state.themeReducer)

    const toggleTheme = () => {
        dispatch(changeTheme(currentTheme === 'light' ? 'dark' : 'light'))
        console.log(currentTheme === 'dark')
    }

    // useEffect(() => {
    //     document.body.setAttribute('data-theme', currentTheme)
    // }, [currentTheme])

    return (
        <div>
            <div onClick={toggleTheme} style={{cursor: 'pointer', background: 'white'}}>
                {currentTheme === 'light' ? <MdOutlineDarkMode/> : <MdOutlineLightMode/>}
            </div>
        </div>
    )
}