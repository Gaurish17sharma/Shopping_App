import { useState } from "react"

export default function Board({ product , addToCart , onCartClick}) {
    const [prd_count , setPrd_Count] = useState(1);

    const updatedPrd_count = (event) =>{
        setPrd_Count(parseInt(event.target.value));
        console.log(prd_count);
    };

    const addCart = () => {
        addToCart(product , prd_count);
    }

    return (
        <>
            <div className="product-img">
                <img className="image_api" src={product.image} alt="product-image" />
            </div>
            <p className="product-title">{product.title}</p>
            <p className="product-price">{"$" + product.price}</p>
            <input type="number"
                min="1"
                max="20"
                value={prd_count}
                onChange={updatedPrd_count}
            />
            <button className="cart_button" onClick={addCart} >Add To Cart</button>
            
        </>
    )
}