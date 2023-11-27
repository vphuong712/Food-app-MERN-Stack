import Order from "../components/Order/Order";
import { getAuthToken } from "../util/auth";
import { useEffect } from "react";
import { redirect } from "react-router-dom";

const OrderPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return <div className="mt-220">
        <Order />
    </div>
}

export default OrderPage;

export const loader = () => {
    const token = getAuthToken();
    if(!token || token === 'EXPIRED') {
        return redirect('/')
    }
   return null;
}