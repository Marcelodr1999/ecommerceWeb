
import './App.css'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Api from './components/Api'
import Card from './components/Card'
import Products from './components/Products'
import { BrowserRouter as Router,Routes, Route, Link, useParams } from 'react-router-dom';
import ProductDetail from './pages/ProductDetail'
import LoginPage from './pages/LoginPage';
import Register from './components/Register'
import FilteredPage from './pages/FilteredPage'
import { CartProvider } from './components/Cart'
import CartItems from './components/CartItems'

function BlogPost() {
  let { id } = useParams();
  return <div style={{ fontSize: "50px" }}>
           Now showing post {id}
         </div>;
}
function App() {

  return (
    <CartProvider>
        <Routes>
        <Route path="/" element={<Products />} />
          {/* <Route path="/products" element={<Products />} /> */}
          {/* <Route path="/about" element={<ProductDetail />} /> */}
          <Route path="/products/:productslug" element={<ProductDetail />} />
          <Route path="/:cat" element={<FilteredPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/cart" element={<CartItems />} />
          <Route path="/register" element={<Register />} />

        </Routes>
    
    </ CartProvider>
  )
}

export default App
