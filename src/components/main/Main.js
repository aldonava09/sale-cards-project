import React from 'react';
import { useState } from 'react';
import '../../styles/main/main.css';
import PaymentType from './__paymentType/main__paymentType.js';
import Cards from './__cards/main__cards.js';

function Main() {

    const [paymentMode, setPaymentMode] = useState(true);

    return (
        <div className="main">
            <PaymentType paymentMode={paymentMode} setPaymentMode={setPaymentMode}/>
            <Cards/>
        </div>
    );
}

export default Main;