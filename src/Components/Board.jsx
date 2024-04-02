export default function Board({ product }) {
    return (
        <>
            <div className="product-image">
                <img src={product.image} alt="product-image" />
            </div>
            <p className="product-title">{product.title}</p>
            <p className="product-price">{"$" + product.price}</p>
            <input type="number"
                min="1"
                max="20"
            />
            <button>Add To Cart</button>
            
        </>
    )
}