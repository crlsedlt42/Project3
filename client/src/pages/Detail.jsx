import { useEffect, useState } from "react";
import { Link, useParams } from 'react-router-dom';
import { useQuery } from "@apollo/client";


import Cart from '../components/Cart';
import { useStoreContext } from '../utils/GlobalState';
import { REMOVE_FROM_CART, UPDATE_CART_QUANATITY,ADD_TO_CART,UPDATE_PRODUCTS } from "../utils/actions";
import { QUERY_PRODUCTS } from "../utils/queries";
import { idbPromise } from "../utils/helpers";
import CartItem from "../components/CartItem";

function Details() {
    const [state, dispatch] = useStoreContext();

    const { id } = useParams();

    const [currentProduct, setCurrentProduct] = useState({});

    const { loading, data } = useQuery(QUERY_PRODUCTS);

    const { products, cart} = state;

    useEffect(() => {
        if (products.lenght) {
            setCurrentProduct(products.find((product) => product._id === id));
        }
        else if (data) {
        dispatch({
            type: UPDATE_PRODUCTS,
            products: data.products,
        });
        }
        else if (!loading) {
            idbPromise('products', 'get').then((indexedProducts) => {
                dispatch({
                    type: UPDATE_PRODUCTS,
                    products: indexedProducts,
                });
            });
        }
    }, [products, data, loading, dispatch, id]);

    const addToCart = () => {
        const itemInCart = cart.find((cartItem) => cartItem._id === id);
        if (itemInCart) {
            dispatch({
                type: UPDATE_CART_QUANATITY,
                _id: id,
                purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
            });
            idbPromise('cart', 'put', {
                ...itemInCart,
                purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
            });
        } else {
            dispatch({
                type: ADD_TO_CART,
                product: { ...currentProduct, purchaseQuantity: 1},
            });
            idbPromise('cart', 'put', { ...currentProduct, purchaseQuantity: 1 });
        }
    };

    const removeFromCart = () => {
        dispatch({
            type: REMOVE_FROM_CART,
            _id: currentProduct._id,
        });

        idbPromise('cart', 'delete', { ...currentProduct });
    };

    return (
        <>
        {currentProduct && cart ? (
            <div>
                <Link to="/">back to Products</Link>

                <h2>{currentProduct.name}</h2>

                <p>{currentProduct.description}</p>

                <p>
                    <strong>Price</strong>${currentProduct.price}{' '}
                    <button onClick={addToCart}>Add to Cart</button>
                    <button disabled={!cart.find((p) => p._id === currentProduct._id)}
                    onClick={removeFromCart}
                    
                    >
                        Remove from Cart
                    </button>
                </p>

                <img src={`/images/${currentProduct.image}`}
                alt={currentProduct.name}></img>
            </div>
        ) : null }
        <Cart />
        </>
    );
}

export default Details;