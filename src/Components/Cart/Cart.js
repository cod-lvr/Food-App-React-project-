import classes from "./Cart.module.css";
import Model from "../UI/Model";

const Cart = props => {
    const dum = [{ id: 'c1', name: "suchi", amount:'2', price: 12.99}]
    const cartItems = (
        <ul className={classes['cart-items']}>
            {dum.map((item) => <li>{item.name}</li>)}
        </ul>
    );

    return (
        <Model onClose={props.onClose}>
            {cartItems}
            <div className={classes.total}>
                <span>total amount</span>
                <span>35.22</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onClose}>close</button>
                <button className={classes.button}>order</button>
            </div>
        </Model>
    )
};

export default Cart;