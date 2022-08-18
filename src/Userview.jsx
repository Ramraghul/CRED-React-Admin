import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

function Userview() {
    const perams = useParams()
    console.log(perams);
    const [serchperamce, setserchperamce] = useSearchParams()
    console.log(...serchperamce);
    return (
        <>
            <div>{perams.id}</div>
            <button class="btn btn-sm btn-danger" onClick={() => {
                setserchperamce({
                    name: "raghul",
                    age: 25
                })
            }}>Click me buddy</button>
        </>
    )
}

export default Userview