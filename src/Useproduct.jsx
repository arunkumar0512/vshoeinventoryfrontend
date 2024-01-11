import { useEffect, useState } from "react";
import axios from "axios";

const useProducts = () => {
    const [items, setItems] = useState([]);
     useEffect(()=>{
        fetchdata();
     },[]);

     const fetchdata=async(req,res) =>{
        await axios.get('https://vshoeinventorybackend.onrender.com/api/get/product')
        .then((res)=>{
            setItems(res.data.data)
            setmessage(res.data.message)
        })
     }
    // useEffect(() => {
    //     fetch('https://localhost:4000/api/get/product')
    //         .then(res => res.json())
    //         .then(data => setItems(data))
    // }, [items]);
    return [items, setItems];
}
export default useProducts;