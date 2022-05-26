import { useEffect, useState } from "react";

const useOrders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('https://polar-lowlands-96437.herokuapp.com/order')
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [])
    return [orders, setOrders]
}
export default useOrders;

