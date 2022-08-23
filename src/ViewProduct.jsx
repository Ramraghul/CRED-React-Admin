import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams} from "react-router-dom";

function ViewProduct() {
    let params = useParams()
    // let [serch, setserch] = useSearchParams()

    let [demo, setDemo] = useState({})

    useEffect(() => {
        loadData()
    }, [])

    let loadData = async () => {
        try {
            let pro = await axios.get(`https://630098ce59a8760a757cc0bc.mockapi.io/Groot/${params.id}`)
            setDemo(pro.data)
        } catch (error) {

        }
    }
    return (
        <>
            <span style={{ width: "20rem" }} className="d-grid" >
                <h3>{demo.Product}</h3>
                <h3>{demo.Gender}</h3>
                <h3>{demo.About}</h3>
                <h3>{demo.Price}</h3>
            </span>
        </>
    );
}

export default ViewProduct;
