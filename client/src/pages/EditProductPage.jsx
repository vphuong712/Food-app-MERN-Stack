import EditProduct from "../components/Forms/EditProduct";
import axios from "axios";
import { redirect } from "react-router-dom";
import { getAuthToken, adminInfo } from "../util/auth";

const EditProductPage = () => {
    return <EditProduct />
}

export default EditProductPage;

export const loader = async ({ params }) => {
    const adminId = adminInfo.id;
    const userId = localStorage.getItem('userId');
    const token = getAuthToken();
    if(userId === adminId && token) {
        const response = await axios.get(`http://localhost:8080/menu/${params.foodId}`);
        if(response.status === 200){
            return response.data;
        } 
    }
    return redirect('/');
}
