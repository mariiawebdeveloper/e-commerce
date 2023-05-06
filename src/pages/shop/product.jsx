import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../../context/shop-context";

export const Product = (props) => {
  const { id, productName, price, productImage, categoryName } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemCount = cartItems[id] || 0;

  return (
      <div className="product">
        <Link to={`/product/${id}`} className="product-link">
          <img src={productImage} alt={productName} />
          <div className="description">
            <p>
              <b>{productName}</b>
            </p>
            <p>
              <b>{categoryName}</b>
            </p>
            <p> {price} грн</p>
          </div>
        </Link>
        <button className="addToCartBttn" onClick={() => addToCart(id)}>
          + {cartItemCount > 0 && <> ({cartItemCount})</>}
        </button>
      </div>
  );
};
