
import './App.css'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Api from './components/Api'
import Card from './components/Card'
import Products from './components/Products'
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import ProductDetail from './pages/ProductDetail'
import LoginPage from './pages/LoginPage';
import Register from './components/Register'

function App() {

  return (
    <>
        <Routes>
        <Route path="/" element={<Products />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<ProductDetail />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<Register />} />

        </Routes>
    
    </>
  )
}

export default App
