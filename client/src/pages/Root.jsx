import Header from "../components/Header";
import AddProduct from "../components/AddProduct";
import Cart from "../components/Cart";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

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