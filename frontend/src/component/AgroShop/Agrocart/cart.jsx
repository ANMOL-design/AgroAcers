import React, { useEffect, useState} from "react";
import {useParams, useLocation, useNavigate } from "react-router-dom";
import Loader from "../../Loader";
import "./../../../Styles/Cart.css";

function MyCart(){

    const navigate = useNavigate();
    const [DataLoading, setDataLoading] = useState(false);

    const {id} = useParams();
    const value = useLocation().search;
    const qty = value.split("=")[1];

    console.log(id, value, qty);

    const callAboutPage = async () => {
        try {
            const res = await fetch("/aboutuser", {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                credentials: "include",
            });
    
            const data = await res.json();
                
            if (!res.status === 200) {
                const error = new Error(res.error);
                throw error;
            }

            console.log(data);
        } 
        catch (err) {
            console.log(err);
            navigate("/login", { replace: true })
        }
    };

    useEffect(() => {
        callAboutPage();

        window.scroll(0,0);
        setDataLoading(true);
    }, []);


    if (!DataLoading){
        return (
            <Loader />
        );
    }

    return(
        <>
          <h1>Hello</h1>
        </>
    )
}

export default MyCart;
