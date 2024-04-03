export default function Cart({ products }) {
    return (
        <>
            <div className="products">
                {products?.map((product) => (
                    <div className="product-cart" key={product.id}>
                        <div className="product-img">
                            <img className="image_api" src={product.image} alt="product-image" />
                        </div>
                        <p className="product-title">{product.title}</p>
                        <p className="product-price">{"$" + product.price}</p>
                        <input type="number"
                            min="1"
                            max="20"
                            value={prd_count}
                            onChange={onInputClick}
                        />
                        <button>Remove</button>

                    </div>

                ))}
            </div>
        </>
    )

}