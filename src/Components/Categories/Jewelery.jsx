import { useEffect, useState } from "react";
import Board from "../Board";
import '../Styling/Product.css';

export default function Jewelery({ products, setProduct, addToCart }) {
    const [productClicked, SetProductClicked] = useState([]);
    const [cartscore, setCartScore] = useState(0);

    function onCartClick(cartId) {
        if (productClicked.includes(cartId)) {
            setCartScore(0);
            SetProductClicked([]);
        }
        else {
            setCartScore(cartscore + 1);
            SetProductClicked([...productClicked, cartId]);
            setProduct(products);
        }
    }

    useEffect(() => {
        const getCartsData = async function () {
            let response;
            try {
                response = await fetch(
                    `https://fakestoreapi.com/products/category/jewelery`
                );

                if (!response.ok) {
                    throw new Error("Error in fetching data");
                }
                let result = await response.json();
                setProduct(result);
                console.log(result);
            }
            catch (error) {
                console.log("Error on fetching data");
                setProduct(null);
            }

        };

        getCartsData();
    }, []);

    return (
        <div className="catt">
            <h1>Jewelery</h1>
            <div className="products">
                {products?.map((product) => (
                    <div className="product-cart" key={product.id}>
                        <Board product={product} addToCart={addToCart} onCartClick={onCartClick}
                        />
                    </div>

                ))}
            </div>

        </div>


    )
}