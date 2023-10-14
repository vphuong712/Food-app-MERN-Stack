import FoodItemDetail from "../components/FoodItemDetail";
import axios from "axios";

const FoodItemDetailPage = () => {
    return <FoodItemDetail />
}

export default FoodItemDetailPage;

export const loader = async ({ params }) => {
    const response = await axios.get(`http://localhost:8080/menu/${params.foodId}`);
    return response;
}