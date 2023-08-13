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
import { Header } from "./components/Header"
import { AttractionPage } from "./pages/AttractionPage"
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
		path: 'countries/:name',
		element: <AttractionPage/>,
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
		// mode: currentTheme,

		
		

	}

	// useEffect(() => {
	// 	theme.mode = currentTheme
	// }, [currentTheme])
    

	return (
		<ThemeProvider theme={theme}>
			
			<RouterProvider router={router}/>
		</ThemeProvider>
	)
}

export default App