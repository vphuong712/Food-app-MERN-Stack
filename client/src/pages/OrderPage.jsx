import Order from "../components/Order/Order";
import { useEffect } from "react";

const OrderPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return <div className="mt-220">
        <Order />
    </div>
}

export default OrderPage;