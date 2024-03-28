import './Head.css';

export default function Head({ setToProductMode , setToHomeMode ,setToAboutMode }) {
    const setProductMode = () => {
        setToProductMode();
    }

    const setHomeMode = () => {
        setToHomeMode();
    }

    const setAboutMode = () => {
        setToAboutMode();
    }

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
                    <li>
                        Categories
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