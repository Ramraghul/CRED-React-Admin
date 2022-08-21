import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

function Userview() {
    const perams = useParams()
   
    // const [serchperamce, setserchperamce] = useSearchParams()
    
    const [userdata,setUserdata]=useState({})

    useEffect(()=>{
        loadUser()
    },[])

    let loadUser = async ()=>{
        try {
        let user = await axios.get(`https://630098ce59a8760a757cc0bc.mockapi.io/Tony/${perams.id}`)
        setUserdata(user.data)
        } catch (error) {
            
        }
    }
    return (
        <>
            <h3>{userdata.name}</h3>
            <h3>{userdata.position}</h3>
            <h3>{userdata.office}</h3>
            <h3>{userdata.age}</h3>
            <h3>{userdata.start_date}</h3>
            <h3>{userdata.salary}</h3>
        </>
    )
}

export default Userview