import { attractionAPI } from "../services/AttractionService"
import {useState} from 'react'
export const AttractionsList: React.FC = () => {
    const [limit, setLimit] = useState(100)
    const {data: attractions} = attractionAPI.useFetchAllAttractionQuery(limit)
    return (
        <div>
            <div>
                {attractions?.map(attraction => 
                    <div>
                        <h3>{attraction.id}. {attraction.title}</h3>
                        <p>{attraction.description}</p>
                        <p>Address: {attraction.address.country}, {attraction.address.city}, {attraction.address.district}</p>
                    </div>
                    
                )}
            </div>
        </div>
    )
}