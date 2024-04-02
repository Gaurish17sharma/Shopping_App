import { useState } from 'react';
import './Styling/Head.css';
import DropdownMenu from './DropdownMenu';
import { NavLink } from 'react-router-dom';

export default function Head({ setToProductMode, setToHomeMode, setToAboutMode, categories }) {

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
                    <li className="dropdown">
                        <div className="categoriesBtn">Categories</div>
                        <div className="dropdown-links">
                            {categories &&
                                categories.map((category) => (
                                    <NavLink key={category} to={"categories/" + category}>
                                        {category}
                                    </NavLink>
                                ))}
                        </div>
                    </li>

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