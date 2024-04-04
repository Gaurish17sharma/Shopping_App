import './Styling/Cart.css';

function Cart({ cart,
    removeFromCart,
    updatedPrd_count,
    setToProductMode
}) {

    const setProductMode = () => {
        setToProductMode();
    }
    return (
        <>

            {cart?.length == 0 ? (
                <div className="empty-cart">
                    <p>Your Cart is Empty!!</p>
                    <img className="empty_cart" src='shopping-cart (1).png' alt="" />
                    <button className='shop_now' onClick={setProductMode}>Shop Now</button>
                </div>
            ) : (
                <>

                    <div className="cart">
                        {cart?.map((item) => (
                            <div className="cart-item" key={item.id}>
                                <div className="cart-item-info">
                                    <img className="item_img" src={item.img} alt="" />
                                    <div className="cart-item-description">
                                        <p>
                                            <b>{item.title}</b>
                                        </p>
                                    </div>
                                </div>
                                <div className="cart-item-input">
                                    <i>Total: $ {item.totalPrice.toFixed(2)}</i>

                                    <input
                                        type="number"
                                        value={item.prd_count}
                                        min="1"
                                        max="20"
                                        onChange={(event) =>
                                            updatedPrd_count(cart, item.id, event, item.price)
                                        }
                                    />

                                </div>

                                <button onClick={() => removeFromCart(cart, item.id)}>
                                    Remove
                                </button>
                            </div>
                        ))}
                    </div>
                    <div className="checkout-info">
                        <p>
                            Subtotal: ${" "}
                            {cart
                                .reduce((items, item) => {
                                    return (items += item.totalPrice);
                                }, 0)
                                .toFixed(2)}
                        </p>
                        <button className="checkOut">Checkout</button>
                    </div>

                </>
            )}
        </>
    );
}
export default Cart;