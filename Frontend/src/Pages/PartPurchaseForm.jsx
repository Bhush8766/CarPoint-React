import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import NavbarAfter from '../Components/NavbarAfter';

const PartPurchaseForm = () => {
    const [formData, setFormData] = useState({
        buyerName: "",
        buyerEmail: "",
        purchaseDate: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log("Submitting data:", formData);

            const response = await fetch("http://localhost:3000/car/purchase", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData) // No carId needed
            });

            const result = await response.json();
            console.log("API Response:", result);

            if (response.ok) {
                alert("Purchase successful!");
            } else {
                alert(`Error: ${result.message || "Failed to process purchase."}`);
            }
        } catch (error) {
            console.error("Fetch Error:", error);
            alert("Network error. Check console for details.");
        }
    };


    return (
        <div>
            <NavbarAfter />
            
            <div className="purchaseMain">
            <center>  <h2>Parts Purchase Form</h2>    </center>
            <form onSubmit={handleSubmit} className="purchaseForm">
                <label>
                    Buyer Name:
                    <br/>
                    <input type="text" name="buyerName" value={formData.buyerName} onChange={handleChange} required />
                </label>
                <br />
                <label>
                    Buyer Email:
                    <br/>
                    <input type="email" name="buyerEmail" value={formData.buyerEmail} onChange={handleChange} required />
                </label>
                <br />
                <label>
                    Purchase Date:
                    <br/>
                    <input type="date" name="purchaseDate" value={formData.purchaseDate} onChange={handleChange} required />
                </label>
                <br />
                <button type="submit"  className="btn">Buy Now</button>
            </form>
            </div>

        </div>
    );
};

export default PartPurchaseForm;
