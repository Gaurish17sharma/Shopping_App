import { useState, useEffect } from "react";
import Head from "./Components/Head";
import Home from "./Components/Home";
import Product from "./Components/Product";
import About from "./Components/About";
import Cart from "./Components/Cart";
import Jewelery from "./Components/Categories/Jewelery";
import Electronics from "./Components/Categories/Electronics";
import Men from "./Components/Categories/Men";
import Women from "./Components/Categories/Women";

function App() {
  const [mode, setMode] = useState("home");
  const [products, setProduct] = useState();
  const [cart, setCart] = useState([]);

  function addToCart(product, prd_count) {
    let totalPrice = parseFloat((product.price * prd_count).toFixed(2));
    let currentItemIndex = cart.findIndex(
      (item) => item.title == product.title
    )

    if (currentItemIndex !== -1) {
      let updatedCart = [...cart];
      updatedCart[currentItemIndex].prd_count = prd_count;
      updatedCart[currentItemIndex].totalPrice = totalPrice;
      setCart(updatedCart);
    }
    else {
      setCart([...cart,
      {
        id: product.id,
        title: product.title,
        price: product.price,
        prd_count: prd_count,
        totalPrice: totalPrice,
        img: product.image,
      },
      ]);
    }
  }

  function removeFromCart(cart, id) {
    setCart(cart.filter((item) => id != item.id));
  }

  function updatedPrd_count(cart, id, event, itemPrice) {
    let newPrd_count = parseInt(event.target.value);
    let updatedCart = cart.map((item) => item.id == id ? {
      ...item,
      prd_count: newPrd_count,
      totalPrice: newPrd_count * itemPrice
    } : item);
    setCart(updatedCart);

  }

  function setToProductMode() {
    setMode("product");
  }

  function setToHomeMode() {
    setMode("home");
  }

  function setToAboutMode() {
    setMode("about");
  }

  function setToCartMode() {
    setMode("cart")
      ;
  }

  function setToJewelMode() {
    setMode("jewel");
  }

  function setToElecMode() {
    setMode("elec");
  }

  function setToMenMode() {
    setMode("men");
  }

  function setToWomenMode() {
    setMode("women");
  }

  return (
    <>
      <Head
        setToProductMode={setToProductMode}
        setToHomeMode={setToHomeMode}
        setToAboutMode={setToAboutMode}
        setToCartMode={setToCartMode}
        cart={cart}
        setToJewelMode={setToJewelMode}
        setToElecMode={setToElecMode}
        setToMenMode={setToMenMode}
        setToWomenMode={setToWomenMode}
      />

      {mode == "home" ? (
        <Home setToProductMode={setToProductMode} />
      ) : mode == "product" ? (
        <Product products={products}
          setProduct={setProduct}
          addToCart={addToCart}
        />
      ) : mode == "about" ? (
        <About />
      ) : mode == "cart" ? (
        <Cart cart={cart}
          removeFromCart={removeFromCart}
          updatedPrd_count={updatedPrd_count}
          setToProductMode={setToProductMode}
        />

      ) : mode == "jewel" ? (
        <Jewelery products={products}
          setProduct={setProduct}
          addToCart={addToCart} />
      ) : mode == "elec" ? (
        <Electronics products={products}
          setProduct={setProduct}
          addToCart={addToCart} />
      ) : mode == "men" ? (
        <Men products={products}
          setProduct={setProduct}
          addToCart={addToCart} />
      ) : (
        <Women products={products}
          setProduct={setProduct}
          addToCart={addToCart} />
      )}
    </>
  );
}

export default App;
