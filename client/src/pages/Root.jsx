import Header from "../components/Header";
import AddProduct from "../components/Forms/AddProduct";
import Cart from "../components/Cart/Cart";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import { getAuthToken } from "../util/auth";
import axios from "axios";

const Root = () => {
    return (
        <>
            <Header />
            <AddProduct />
            <Cart />
            <Outlet />
            <Footer/>
        </>
    );
}

export default Root;

export const loader = async () => {
    const token = getAuthToken();
    if(token) {
        const userId = localStorage.getItem('userId');
        const response = await axios.get(`http://localhost:8080/user/${userId}`, {
            headers: {'Authorization': 'Bearer ' + token}
        })
        return response.data;
    }
    return null;
}
