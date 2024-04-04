import { useState, useEffect } from "react";
import "./Styles/App.css";
import Head from "./Components/Head";
import Home from "./Components/Home";
import Product from "./Components/Product";
import About from "./Components/About";
import Cart from "./Components/Cart";

function App() {
  const [mode, setMode] = useState("home");
  const [categories, setCategories] = useState(null);
  const [currentCategory, setcurrentCategory] = useState("");
  const [products, setProduct] = useState();
  const [cart, setCart] = useState([]);

  function addToCart(product, prd_count) {
    let totalPrice = parseFloat((product.price * prd_count).toFixed(2));
    let currentItemIndex = cart.findIndex(
      (item) => item.title = product.title
    )

    if (currentItemIndex !== -1) {
      let updatedCart = [...Cart];
      updatedCart[currentItemIndex].prd_count = prd_count;
      updatedCart[currentItemIndex].totalPrice = totalPrice;
      setCart(updatedCart);
    }
    else {
      setCart([...Cart,
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
    newPrd_count = parseInt(event.target.value);
    let updatedCart = cart.map((item) => item.id == id ? {
      ...item,
      prd_count: newPrd_count,
      totalPrice: newPrd_count * itemPrice
    } : item);
    setCart(updatedCart);

  }

  useEffect(() => {
    const getCategories = async function () {
      try {
        let response = await fetch(
          "https://fakestoreapi.com/products/categories",
        );
        if (!response.ok) {
          throw new Error("Error in fetching data");
        }
        let result = await response.json();
        setCategories(result);
      } catch (error) {
        console.log("Error on fetching data");
        setCategories(null);
      }
    };

    getCategories();
  }, []);

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

  return (
    <>
      <Head
        setToProductMode={setToProductMode}
        setToHomeMode={setToHomeMode}
        setToAboutMode={setToAboutMode}
        setToCartMode={setToCartMode}
        categories={categories}
        changeCat={(val) => setcurrentCategory(val)}
        cart = {cart}
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
      ) : (
        <Cart cart = {cart}
          removeFromCart={removeFromCart}
          updatedPrd_count={updatedPrd_count}
        />
      )}
    </>
  );
}

export default App;
