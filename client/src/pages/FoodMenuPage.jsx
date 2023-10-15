import FoodMenu from "../components/Foods/FoodMenu";
import axios from "axios";



const FoodMenuPage = () => {
    return <FoodMenu />
}

export default FoodMenuPage;

export const loader = async () => {
    const response = await axios.get('http://localhost:8080/menu');
    if(response.status === 200) {
        return response.data;
    }
};