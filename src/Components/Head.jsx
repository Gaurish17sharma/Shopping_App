import { useState } from 'react';
import './Styling/Head.css';
import DropdownMenu from './DropdownMenu';

export default function Head({ setToProductMode, setToHomeMode, setToAboutMode }) {
    const [isDropDownVisible, setDropDownVisible] = useState(false);

    const setProductMode = () => {
        setToProductMode();
    };

    const setHomeMode = () => {
        setToHomeMode();
    };

    const setAboutMode = () => {
        setToAboutMode();
    };

    const handleMouseEnter = () => {
        setDropDownVisible(true);
    };

    const handleMouseLeave = () => {
        setDropDownVisible(false);
    };

    return (
        <>
            <div className="header">
                <h1>Regale Shop Store </h1>
                <ul className ="navigation">
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
                        <li className='categoriesBtn'>Categories</li>
                        
                        {isDropDownVisible && <DropdownMenu />}
                    </div>

                    <li onClick={setAboutMode}>
                        About us
                    </li>
                </ul>
                <div className="cart-bar">
                    <button>
                        <img className="cartIcon" src='shopping-cart (1).png' alt="" />
                    </button>
                </div>
            </div>
        </>
    );
}