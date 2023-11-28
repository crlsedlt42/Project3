import { useEffect } from "react";
import { loadStripe } from '@stripe/stripe-js';
import { useLazyQuery } from '@apollo/client';
import { QUERY_CHECKOUT } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import Auth from '../../utils/auth';
import { useStoreContext } from '../../utils/GlobalState';
import { TOGGLE_CART, ADD_MULTIPLE_TO_CART } from "../../utils/actions";
// need to import style.css need to make also


const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

const Cart = () => {
    const [state, dispatch] = useStoreContext();
    const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);

    useEffect(() => {
        if (data) {
            stripePromise.then((res) => {
                res.redirectToCheckout({ sessionId: data.checkout.session });
            });
        }
    }, [data]);

    useEffect(() => {
        async function getCart() {
            const cart = await idbPromise('cart', 'get');
            dispatch({ type: ADD_MULTIPLE_TO_CART, products: [...cart] });
        }

        if (!state.cart.length) {
            getCart();
        }
    }, [state.cart.length, dispatch]);

    function toggleCart() {
        dispatch({ type: TOGGLE_CART });
    }

    function calculateTotal() {
        let sum = 0;
        state.cart.foreach((item) => {
            sum += item.price * item.purchaseQuantity;
        });
        return sum.toFixed(2);
    }

    function submitCheckout() {
        getCheckout({
            variables: {
                products: [...state.cart],
            },
        });
    }

    if (!state.cartOpen) {
        return (
            <div onClick={toggleCart}>
                <span role="img" aria-label="trash">
                🛍️
                </span>
            </div>
        );
    }

    return (
        <div>
            <div onClick={toggleCart}>
                [close]
            </div>
            <h2> Your Shopping Cart</h2>
            {state.cart.length ? (
                <div>
                    {state.cart.map((item) => (
                        <CartItem key={item._id} item={item} />
                    ))}

                    <div>
                        <strong>Total: ${calculateTotal()}</strong>

                        {Auth.loggedIn() ? (
                            <button onClick={submitCheckout}>Checkout</button>
                        ) : (
                            <span>(log in to check out)</span>
                        )}
                    </div>
                </div>
            ) : (
                <h2>
                    <span role="img" aria-label="sad">
                    😞
                    </span>
                </h2>
            )}
        </div>
    );
};

export default Cart;