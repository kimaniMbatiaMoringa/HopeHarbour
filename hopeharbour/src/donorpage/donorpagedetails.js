import React from "react";

function DonorPageDetails(){

    const mainContainer={
        backgroundColor:"#E9E9E9",
        marginTop:"2%",
        width:"70%",
        height: "1000px",
        borderRadius:"30px"
    }

    const detailsDisplayer={
        textAlign:"center",
        marginTop:"5%"
    }

    const detailsEditor={
        marginTop:"5%",
        width:"60%",
        height:"50%",
        backgroundColor:"white",
        textAlign:"center",
        borderRadius:"30px"

    }

    const inputStyle={
        height:"10%",
        width:" 60%",
        backgroundColor:"#D9D9D9",
        border: "none",
        borderRadius:"30px",
        textAlign:"center",
        marginTop:"5%",
        fontFamily:"HeeboRegular"
    }

    const changeDetailsButton={
        width:"30%",
        height:"10%",
        border:"none",
        backgroundColor:"#97B3DC",
        borderRadius:"30px",
        fontFamily:"HeeboBold",
        color:"white"
    }

    return(
        <div className="container" style={mainContainer} >
            <div className="container" style={detailsDisplayer}>
                <h1 style={{fontFamily:"HeeboBold", fontSize:"50px"}}>Your Account Details</h1>
                <div className="container"style={{width:"60%", padding:"20px", backgroundColor:"white", borderRadius:"30px", fontFamily:"HeeboRegular"}}>
                    <div className="row" style={{padding:"20px"}} >
                        <div className="col" style={{width:"10%"}}>
                            <p>Username:</p>
                        </div>
                        <div className="col">
                            <div className="container" style={{backgroundColor:"#97B3DC", width:"350px", height:"40px", borderRadius:"30px"}}>
                                <p>Carlton Njenga</p>
                            </div>
                        </div>
                    </div>
                    <div className="row" style={{padding:"20px"}} >
                        <div className="col" style={{width:"10%"}}>
                            <p>Email:</p>
                        </div>
                        <div className="col">
                            <div className="container" style={{backgroundColor:"#97B3DC", width:"350px", height:"40px", borderRadius:"30px"}}>
                                <p>carlton.njenga@student.moringaschool.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container" style={detailsEditor}>
                <h1 style={{fontFamily:"HeeboBold", fontSize:"50px", paddingTop:"5%"}}>Change Details</h1>
                <input type="text" placeholder="Username" style={inputStyle}></input>
                <input type="text" placeholder="Email" style={inputStyle}></input>
                <input type="text" placeholder="Password" style={inputStyle}></input>
                <div className="container" style={{width:"100%",height:"100%",padding:'30px'}}>
                    <button style={changeDetailsButton}>Confirm New Details</button>
                </div>

            </div>
        </div>
    )
}

export default DonorPageDetails