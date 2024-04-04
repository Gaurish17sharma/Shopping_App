function Cart({ cart, removeFromCart, updatedPrd_count }) {
    return (
      <>
    
        {cart?.length == 0 ? (
          <div className="empty-cart">
            <p>Your cart is empty</p>
            <img src='shopping-cart (1).png' alt="" />
          </div>
        ) : (
          <>
      
            <div className="cart">
              {cart?.map((item) => (
                <div className="cart-item" key={item.id}>
                  <div className="cart-item-info">
                    <img src={item.img} alt="" />
                    <div className="cart-item-description">
                      <p>
                        <b>{item.title}</b>
                      </p>
                    </div>
                  </div>
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
  
                  <button onClick={() => removeFromCart(cart, item.id)}>
                    Remove
                  </button>
                </div>
              ))}
            </div>

            </>
      )}
    </>
  );
}
export default Cart;