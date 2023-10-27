import Header from "../components/Header";
import AddProduct from "../components/Forms/AddProduct";
import Cart from "../components/Cart/Cart";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import { getAuthToken } from "../util/auth";

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

export const loader = () => {
    const token = getAuthToken();
    return token;
}
