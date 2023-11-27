import OrderStatus from "../components/Order/OrderStatus";
import { getAuthToken } from "../util/auth";
import axios from 'axios';
import { useEffect } from "react";
import { redirect } from "react-router-dom";

const OrderStatusPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return <div className="mt-220">
        <OrderStatus />
    </div>
}

export default OrderStatusPage;

export const loader = async () => {
    const token = getAuthToken();
    const userId = localStorage.getItem('userId');
    if(token && token !== 'EXPIRED' && userId) {
        try {
            const response = await axios.get(`http://localhost:8080/user/${userId}/order-status`, {
                headers: { 'Authorization': 'Bearer ' + token }
            })
            return response.data;
        } catch (error) {
            throw error;
        }
    }
    return redirect('/');
}