import { useState , useEffect } from 'react'
import './Styles/App.css';
import Head from './Components/Head';
import Home from './Components/Home';
import Product from './Components/Product';
import About from './Components/About';

function App() {
  const [mode,setMode] = useState("home");
  const [categories, setCategories] = useState(null);
  const [loadingCategories, setLoadingCategories] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    const getCategories = async function () {
      try {
        let response = await fetch(
          "https://fakestoreapi.com/products/categories"
        );
        if (!response.ok) {
          throw new Error("Error in fetching data");
        }
        let result = await response.json();
        setCategories(result);
      } catch (error) {
        setError(error);
        console.log("Error on fetching data");
        setCategories(null);
      } finally {
        setLoadingCategories(false);
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

  return (
    <>
      <Head setToProductMode={setToProductMode}
            setToHomeMode={setToHomeMode}
            setToAboutMode = {setToAboutMode}
            categories = {categories}
            />

      {mode == "home" ? (
        <Home setToProductMode = {setToProductMode} />
      ) : mode == "product" ? (
        <Product />
      ) : (
        <About />
      )}
    </>

  )
}

export default App
