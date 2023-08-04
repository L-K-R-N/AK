import { RouterProvider } from "react-router"
import { createBrowserRouter } from "react-router-dom"
import { MainPage } from "./pages/MainPage"
import { LoginPage } from "./pages/LoginPage"
import { ProfilePage } from "./pages/ProfilePage"
import './'
import { useAppSelector } from "./hooks/redux"
import { colors, mainColor } from "./styles/colors"
import { ThemeProvider, createGlobalStyle } from "styled-components"
import { changeTheme } from "./store/reducers/ThemeSlice"
import {useEffect} from 'react'
import { SettingsPage } from "./pages/SettingsPage"
import { Header } from "./components/UI/Header"
export const getImgSrc = (src: string) => {
	return `require(${src}).default`
}
const router = createBrowserRouter([
	{
		path: '/',
		element: <MainPage/>,
		errorElement: <MainPage/>
	},
	{
		path: '/login',
		element: <LoginPage/>,
	},
	{
		path: '/profile',
		element: <ProfilePage/>
	},
	{
		path: '/settings',
		element: <SettingsPage/>
	},
])






const App: React.FC = () => {
	const {currentTheme} = useAppSelector(state => state.themeReducer)

	const theme = {
		mode: currentTheme,

		colors: currentTheme === 'light' ? {
			bg_color: '#ffffff',
			second_color: '#e6e6e6',
			green_color: '#8fdb51',
			yellow_color: '#dbbf51',
			text_color: '#111111',
			text_color2: '#363636',

			shadow: '0px 10px 17px 0px rgba(86, 86, 86, 0.2)'
		} : {
			bg_color: '#111111',
			second_color: '#303030',
			green_color: '#8fdb51',
			yellow_color: '#dbbf51',
			text_color: '#ffffff',
			text_color2: '#888888',
			shadow: '0px 13px 25px 0px rgba(0, 0, 0, 0.3)',
		}
		

	}

	useEffect(() => {
		theme.mode = currentTheme
	}, [currentTheme])
    

	return (
		<ThemeProvider theme={theme}>
			
			<RouterProvider router={router}/>
		</ThemeProvider>
	)
}

export default App