import React from 'react'
import Dashcard from './Dashcard'
// import Dashchart1 from './Dashchart1'
// import Dashcard2 from './Dashcard2'
import Dashcard3 from './Dashcard3'
import Dashcard4 from './Dashcard4'
import Dashcard5 from './Dashcard5'
import Dashcard6 from './Dashcard6'

function Dashboard() {
    const cardData=[
        {
            id:1,
            name:"EARNINGS (MONTHLY)",
            value:"$40,000",
            isBar : false,
            theme:"primary"
        },
        {
            id:2,
            name:"EARNINGS (ANNUAL)",
            value:"$215,000",
            isBar : false,
            theme:"success"
        },
        {
            id:3,
            name:"TASKS",
            value:"50%",
            isBar : true,
            theme:"info"
        },
        {
            id:4,
            name:"PENDING REQUESTS",
            value:18,
            isBar : false,
            theme:"warning"
        },
    ]
    return (
        <>
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
            <a href="https://github.com/StartBootstrap/startbootstrap-sb-admin-2/archive/gh-pages.zip" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                className="fas fa-download fa-sm text-white-50"></i> Download Report</a>
        </div>
        
        <div className="row">
            {
                cardData.map((value)=>{
                    return(
                        <Dashcard data={value}></Dashcard>
                    );
                })
            }
        </div>
        {/* <div className="row">
        <Dashchart1></Dashchart1>
        <Dashcard2></Dashcard2>
        </div>  */}
        <div className="row">
        <div className="col-lg-6 mb-4">
            <Dashcard3></Dashcard3>
            <Dashcard4></Dashcard4>
        </div>
        <div className="col-lg-6 mb-4">
            <Dashcard5></Dashcard5>
            <Dashcard6></Dashcard6>
        </div> 
        </div>
        </>
    )
}

export default Dashboard