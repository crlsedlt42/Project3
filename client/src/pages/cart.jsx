import React, {useState} from 'react';
//Button to add product to cart
const Product = ({product, onAddToCart}) => {
return (
<div>
<button onClick={(Add) => onAddToCart(product)}>Add to Cart</button>           
</div>
);
};
//Button to remove product from cart
const CartItem = ({item, onRemoveFromCart}) => {
return (
<div>
<button onClick={(Delete) => onRemoveFromCart(item.product)}>Delete</button>
</div>
);
};
//Display Cart
const Cart = ({cart, onRemoveFromCart}) =>
{
return(
<div>
{cart.map((item) => (
<cartItem key={item.product.id} item={item} onRemoveFromCart={onRemoveFromCart} />
))}
</div>
);
};
//