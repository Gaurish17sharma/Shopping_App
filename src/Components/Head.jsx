import { useState, useEffect} from 'react';
import './Styling/Head.css';

import { NavLink } from 'react-router-dom';

export default function Head({ setToProductMode,
    setToHomeMode,
    setToAboutMode,
    setToCartMode,
    categories,
    changeCat,
    cart,
    products,
    setProduct,
}) {
    const [isDropdownVisible, setDropdownVisible] = useState(false);

    const handleMouseEnter = () => {
        setDropdownVisible(true);
    };

    const handleMouseLeave = () => {
        setDropdownVisible(false);
    };

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
                                {categories?.map((item) => (
                                    <li
                                        onClick={() => {
                                            changeCat(item);
                                        }}
                                        key={item}
                                    >         
                                    </li>
                                ))}
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