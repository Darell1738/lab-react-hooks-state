import React from 'react';

function Item({ item, inCart, onAddToCart }) {
  return (
    <li className="item">
      <span>{item.name} ({item.category})</span>
      {inCart ? (
        <span>{item.name} is in your cart</span>  // ← Exact text test expects
      ) : (
        <button
          data-testid={`product-${item.id}`}  // ← Test clicks this for product-1 (Apple)
          onClick={onAddToCart}
        >
          Add to Cart
        </button>
      )}
    </li>
  );
}

export default Item;