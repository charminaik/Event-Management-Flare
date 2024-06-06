import { useState } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import './style/Payment.css';
import Navigation from "./Navigation";

function Payment() {
    const location = useLocation();
    const navigate = useNavigate();
    const [paymentMethod, setPaymentMethod] = useState('card');

    const handlePaymentMethodChange = (event) => {
        setPaymentMethod(event.target.value);
    };

    const handlePay = () => {
       
        navigate("/QRCodePage", { state: { registrationData: location.state ? location.state.registrationData : null } });
    };

    return (
        <div className="pay">
            <Navigation />
            <div className={`Payment ${paymentMethod !== 'card' ? 'small-height' : ''}`}>
                <h1>Payment methods</h1>

                <label>Email address</label>
                <input type="email" placeholder="Email address" />
                <label>Phone No.</label>
                <input type="text" placeholder="Phone No." />

                <legend>Choose payment method</legend>
                <select value={paymentMethod} onChange={handlePaymentMethodChange}>
                    <option value="card">Card</option>
                    <option value="GooglePay">Google Pay</option>
                    <option value="PayTM">PayTM</option>
                </select>

                {paymentMethod === 'card' && (
                    <>
                        <label>Card number</label>
                        <input type="text" placeholder="Card number" />
                        <label>Expiration</label>
                        <input type="text" placeholder="MM/YY" />
                        <label>CVC</label>
                        <input type="text" placeholder="CVC" />
                        <label>Country</label>
                        <select>
                            <option value="India">India</option>
                            <option value="usa">USA</option>
                            <option value="canada">Canada</option>
                        </select>
                    </>
                )}
                <button type="button" onClick={handlePay}>Pay</button>
            </div>
        </div>
    );
}

export default Payment;
