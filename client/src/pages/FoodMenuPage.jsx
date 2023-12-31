import FoodMenu from "../components/Foods/FoodMenu";
import axios from "axios";
import { getAuthToken } from "../util/auth";
import { useEffect } from "react";



const FoodMenuPage = () => {
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return <FoodMenu />
}

export default FoodMenuPage;

export const loader = async () => {
    const response = await axios.get('https://vphuong712-food-app.onrender.com/menu');
    if(response.status === 200) {
        return response.data;
    }
    return null;
};