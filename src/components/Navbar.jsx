import { NavLink, Link } from 'react-router-dom';
import LogoutButton from './Logout';
import { useCart } from './Cart';
const Navbar = () => {
  const { cart } = useCart();
  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);

    return (
        <>
              {/* <NavLink to="/products">Products</NavLink> */}

     <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
     <a className="navbar-brand" href="#">Shopping</a>
     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
       <span className="navbar-toggler-icon"></span>
     </button>
   
     <div className="collapse navbar-collapse" id="navbarSupportedContent">
       <ul className="navbar-nav mr-auto">
         <li className="nav-item active">
           <NavLink className="nav-link" to="/" >Home <span className="sr-only">(current)</span></NavLink>
         </li>
         <li className="nav-item">
           <NavLink className="nav-link" to="/about">About</NavLink>
         </li>
         <li className="nav-item dropdown">
           <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
             Category
           </a>
           <div className="dropdown-menu" aria-labelledby="navbarDropdown">
             <a className="dropdown-item" href="#">Action</a>
             <a className="dropdown-item" href="#">Another action</a>
             <div className="dropdown-divider"></div>
             <a className="dropdown-item" href="#">Something else here</a>
           </div>
         </li>
         <li className="nav-item">
           <a className="nav-link disabled" href="#">Disabled</a>
         </li>
       </ul>
       <Link to = "/cart">
       <div className="cartHeader">
        <span className="countCart">{totalQuantity}</span>
        <i className="material-symbols-outlined">shopping_cart</i>
      </div>
      </Link>
       <form className="form-inline my-2 my-lg-0">
         <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
         <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
       </form>
       <LogoutButton />
     </div>
   </nav>
   </>
    );
   };
   
   export default Navbar;