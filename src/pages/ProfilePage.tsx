import { Navbar } from "../components/Navbar"
import { Header } from "../components/UI/Header"

export const ProfilePage: React.FC = () => {
    

    return (
        <div>
            <Header/>
            <Navbar
                links={[
                    {to: '/settings', value: 'Settings'}
                ]}    
            />
        </div>
    )
}