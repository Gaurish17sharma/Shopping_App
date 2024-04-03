import { useEffect, useState } from "react";
import Board from "./Board";
import './Styling/Product.css';
import { useParams } from "react-router-dom";

export default function Product() {
    const [products, setProduct] = useState();
    const [productClicked, SetProductClicked] = useState();
    const [cartscore, setCartScore] = useState();
    const { category } = useParams();

    function addToCart() {
        if (productClicked == 0) {
            SetProductClicked([]);
            setCartScore(0);
        }
        else {
            setCartScore(cartscore + 1);
        }

    }

    useEffect(() => {
        const getCartsData = async function () {
            let response;
            try {
                if (category == undefined) {
                    response = await fetch(
                        `https://fakestoreapi.com/products`
                    );
                }
                else {
                    response = await fetch(
                        `https://fakestoreapi.com/products/category/${category}`
                    );
                }
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
    }, [category]);

    return (

        <div className="products">
            {products?.map((product) => (
                <div className="product-cart" key={product.id}>
                    <Board product={product}
                        addToCart={addToCart}
                    />
                </div>

            ))}
        </div>

    )
}