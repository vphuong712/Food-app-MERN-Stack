import FoodMenu from "../components/FoodMenu";
import axios from "axios";



const FoodMenuPage = () => {
    return <FoodMenu />
}

export default FoodMenuPage;

export const loader = async () => {
    const response = await axios.get('http://localhost:8080/menu');
    return response.data;
};