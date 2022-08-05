import React, { useState } from "react";
import { useEffect } from "react";
import useProducts from "../../hooks/useProducts";
import { addToDb, getStoredCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";
import { Link } from "react-router-dom";


const Shop = () => {
  const [products, setProducts] = useProducts();
  const [cart, setCart] = useState([]);
 
  useEffect(()=>{
    const savedCart= [];
    const storedCart = getStoredCart();
    for(const id in storedCart){
        const addedProduct= products.find(product => product.id===id)
        if(addedProduct){
         const quantity= storedCart[id];
         addedProduct.quantity= quantity;
         savedCart.push(addedProduct);
        }
    }
    setCart(savedCart);
  },[products])
 
  const handleAddToCart = (selectedproduct) => {
    // console.log(product);
    let newCart= [];
    const exists= cart.find(product => product.id=== selectedproduct.id);
    if(!exists){
      selectedproduct.quantity= 1;
      newCart = [...cart, selectedproduct];

    }
    else{
      const rest = cart.filter(product=> product.id!==selectedproduct.id);
      newCart=[...rest,exists];
    }
    setCart(newCart);
    addToDb(selectedproduct.id);
  };
  
  return (
    <div className="shop-container">
      <div className="products-container">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}>
        <Link to="/orders">
        <button>Review</button>

          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Shop;
