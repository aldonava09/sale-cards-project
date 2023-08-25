import React from 'react';
import '../../../styles/main/__cards/main__cards.css';

function Cards() {

    return (
        <div className='cards__container'>
            <div className='cards__card'>
                <h3 className='cards__card-title'>Basic</h3>
                <h2 className='cards__card-price'>$19.99</h2>
                <p className='cards__card-feuture'>500 GB Storage</p>
                <p className='cards__card-feuture'>2 Users Allowed</p>
                <p className='cards__card-feuture cards__card-feuture_last'>Send up to 3 GB</p>
                <a className='cards__card-link' href='www.linkedin.com/in/aldo-navarro-147b03282' target='_BLANK'>LEARN MORE</a>
            </div>
            <div className='cards__card'>
                <h3 className='cards__card-title'>Basic</h3>
                <h2 className='cards__card-price'>$19.99</h2>
                <p className='cards__card-feuture'>500 GB Storage</p>
                <p className='cards__card-feuture'>2 Users Allowed</p>
                <p className='cards__card-feuture cards__card-feuture_last'>Send up to 3 GB</p>
                <a className='cards__card-link' href='www.linkedin.com/in/aldo-navarro-147b03282' target='_BLANK'>LEARN MORE</a>
            </div>
            <div className='cards__card'>
                <h3 className='cards__card-title'>Basic</h3>
                <h2 className='cards__card-price'>$19.99</h2>
                <p className='cards__card-feuture'>500 GB Storage</p>
                <p className='cards__card-feuture'>2 Users Allowed</p>
                <p className='cards__card-feuture cards__card-feuture_last'>Send up to 3 GB</p>
                <a className='cards__card-link' href='www.linkedin.com/in/aldo-navarro-147b03282' target='_BLANK'>LEARN MORE</a>
            </div>
        </div>
    );
}

export default Cards;