import { useEffect, useState } from "react";
import Board from "./Board";
import './Styling/Product.css'

export default function Product() {
    const [products, setProduct] = useState();

    useEffect(() => {
        const getCartsData = async function () {
            try {
                let response = await fetch(
                    `https://fakestoreapi.com/products`
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
        <div className="products">
            {products?.map((product) => (
                <div className="product-cart" key={product.id}>
                   <Board product = {product} />
                </div>

            ))}
        </div>
        
    )
}