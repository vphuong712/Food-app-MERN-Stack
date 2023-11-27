import { useEffect } from "react";
import FoodItemDetail from "../components/Foods/FoodItemDetail";
import axios from "axios";

const FoodItemDetailPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return <FoodItemDetail />
}

export default FoodItemDetailPage;

export const loader = async ({ params }) => {
    const response = await axios.get(`https://vphuong712-food-app.onrender.com/menu/${params.foodId}`);
    return response;
}