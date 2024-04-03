import { useState } from 'react';
import './Styling/Head.css';
import DropdownMenu from './DropdownMenu';

import { NavLink } from 'react-router-dom';

export default function Head({ setToProductMode, setToHomeMode, setToAboutMode, setToCartMode, categories, changeCat}) {
    const [isDropdownVisible, setDropdownVisible] = useState(false);

    const handleMouseEnter = () => {
        setDropdownVisible(true);
    };

    const handleMouseLeave = () => {
        setDropdownVisible(false);
    };

    const setCartMode = () =>{
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
                <h1>Regale Shop Store </h1>
                <ul className="navigation">
                    <li onClick={setHomeMode}>
                        Home
                    </li>
                    <li onClick={setProductMode}>
                        Products
                    </li>

                    <div
                        className="menu"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <button className='dropdown-btn'>Categories</button>
                        {/* <DropdownMenu /> */}
                        {isDropdownVisible && (<DropdownMenu categories={categories} changeCategory={(val) => changeCat(val)}/>)}
                    </div>

                    <li onClick={setAboutMode}>
                        About us
                    </li>
                </ul>
                <div className="cart-bar">
                    <button>
                        <img className="cartIcon" onClick={setCartMode} src='shopping-cart (1).png' alt="" />
                    </button>
                </div>
            </div>
        </>
    );
}