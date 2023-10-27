import FoodMenu from "../components/Foods/FoodMenu";
import axios from "axios";
import { getAuthToken } from "../util/auth";



const FoodMenuPage = () => {
    return <FoodMenu />
}

export default FoodMenuPage;

export const loader = async () => {
    const token = getAuthToken();
    const response = await axios.get('http://localhost:8080/menu', { 
        headers: { 'Authorization': 'Bearer ' + token}
    });
    if(response.status === 200) {
        return response.data;
    }
};