import Header from "../components/Header";
import AddProduct from "../components/Forms/AddProduct";
import Cart from "../components/Cart/Cart";
import { Outlet, useSubmit } from "react-router-dom";
import Footer from "../components/Footer";
import { getAuthToken, getTokenDuration } from "../util/auth";
import axios from "axios";
import { useEffect } from "react";

const Root = () => {
    const token = getAuthToken();
    const submit = useSubmit();

    useEffect(() => {
        if(!token) {
            return;
        }
        if(token === 'EXPIRED') {
            submit(null, { action: '/logout', method: 'post'});
            return;
        }

        const tokenDuration = getTokenDuration();
        
        setTimeout(() => {
            submit(null, { action: '/logout', method: 'post'});
        }, tokenDuration);
    }, [token])

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
