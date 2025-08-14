

import React from "react";
import './Sucess.css'; // CSS file for styling
import { useNavigate } from "react-router-dom";

const Done = () => {

    const navigate = useNavigate();

    const handleHome = ()=>{
        navigate("/")
    }
    return (
        <div className="success-container">
            <div className="success-box">
                <div className="checkmark">
                    ✓
                </div>
                <h2>Transaction Successful!</h2>
                <p>Your transaction has been processed successfully.</p>

                <button onClick={handleHome} className="homebtn">Back to Home</button>
            </div>
        </div>
    );
};

export default Done;