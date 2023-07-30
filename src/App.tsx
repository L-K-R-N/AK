import { RouterProvider } from "react-router"
import { createBrowserRouter } from "react-router-dom"
import { MainPage } from "./pages/MainPage"
import { LoginPage } from "./pages/LoginPage"
import { ProfilePage } from "./pages/ProfilePage"



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
  }
])


const App: React.FC = () => {
	
	return <RouterProvider router={router}/>
}

export default App