import {MdOutlineDarkMode, MdOutlineLightMode} from 'react-icons/md'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { changeTheme } from '../store/reducers/ThemeSlice'
import {useEffect} from 'react'
import { Header } from '../components/Header'
export const SettingsPage: React.FC = () => {
    

    return (
        <div>
            <Header/>
        </div>
    )
}