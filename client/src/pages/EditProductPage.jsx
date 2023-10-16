import EditProduct from "../components/Forms/EditProduct";
import axios from "axios";

const EditProductPage = () => {
    return <EditProduct />
}

export default EditProductPage;

export const loader = async ({ params }) => {
    const response = await axios.get(`http://localhost:8080/menu/${params.foodId}`);
    if(response.status === 200){
        return response.data;
    } 
}
