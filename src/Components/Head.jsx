import { useState } from 'react';
import './Styling/Head.css';

export default function Head({ setToProductMode,
    setToHomeMode,
    setToAboutMode,
    setToCartMode,
    cart,
    setToJewelMode,
    setToElecMode,
    setToMenMode,
    setToWomenMode,
}) {

    const setJewelMode = () => {
        setToJewelMode();
    }
    const setElecMode = () => {
        setToElecMode();
    }
    const setMenMode = () => {
        setToMenMode();
    }
    const setWomenMode = () => {
        setToWomenMode();
    }

    const setCartMode = () => {
        setToCartMode();
    }

    const setProductMode = () => {
        setToProductMode();
    };

    const setHomeMode = () => {
        setToHomeMode();
    };

    const setAboutMode = () => {
        setToAboutMode();
    };

    return (
        <>
            <div className="header">
            <img className="logoIcon" src='7884399.jpg' alt="" />
                <h1>Regale Shop Store </h1>
                <ul className="navigation">
                    <li onClick={setHomeMode}>
                        Home
                    </li>
                    <li onClick={setProductMode}>
                        Products
                    </li>

                    <div className="menu">
                        <li className='dropdown-btn'>Categories</li>
                        <div className="dropdown-menu">
                            <ul>
                                <li onClick={setJewelMode}>Jewelery</li>
                                <li onClick={setElecMode}>Electronics</li>
                                <li onClick={setMenMode}>Men's Clothing</li>
                                <li onClick={setWomenMode}>Women's Clothing</li>
                            </ul>
                        </div>
                    </div>

                    <li onClick={setAboutMode}>
                        About us
                    </li>
                </ul>
                <div className="cart-bar">
                    <button>
                        <img className="cartIcon" onClick={setCartMode} src='shopping-cart (1).png' alt="" />
                        {cart?.length > 0 && <p className="cart-quantity">{cart.length}</p>}
                    </button>
                </div>
            </div>
        </>
    );
}