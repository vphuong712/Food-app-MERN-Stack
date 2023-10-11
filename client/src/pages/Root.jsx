import Header from "../components/Header";
import AddProduct from "../components/AddProduct";
import Cart from "../components/Cart";
import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <>
            <Header />
            <AddProduct />
            <Cart />
            <Outlet />
        </>
    );
}

export default Root;