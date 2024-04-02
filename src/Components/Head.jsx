import { useState , useEffect } from 'react';
import './Styling/Head.css';
import DropdownMenu from './DropdownMenu';
import { NavLink } from 'react-router-dom';

export default function Head({ setToProductMode, setToHomeMode, setToAboutMode }) {

    const [categories, setCategories] = useState(null);
    const [loadingCategories, setLoadingCategories] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        const getCategories = async function () {
            try {
                let response = await fetch(
                    "https://fakestoreapi.com/products/categories"
                );
                if (!response.ok) {
                    throw new Error("Error in fetching data");
                }
                let result = await response.json();
                setCategories(result);
            } catch (error) {
                setError(error);
                console.log("Error on fetching data");
                setCategories(null);
            } finally {
                setLoadingCategories(false);
            }
        };

        getCategories();
    }, []);


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