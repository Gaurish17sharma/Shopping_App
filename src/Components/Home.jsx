import './Styling/Home.css';

export default function Home({ setToProductMode }) {

  const setProductMode = () => {
    setToProductMode();
  }
  return (
    <div className="home">
      <h2>Welcome to</h2>
      <h1>Regale Shop Store</h1>
      <p>
        Experience the ultimate online shopping destination! Explore our curated selection of fashion,
        jewelry, and electronics. Elevate your style and tech game with unbeatable deals and top-notch service.
        Shop now for everything you need to live your best life!
      </p>
      <button className='shop_now' onClick={setProductMode}>Shop Now</button>
    </div>
    
  )
}