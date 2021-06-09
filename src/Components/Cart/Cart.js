import classes from "*.module.css";

const Cart = props => {
    const dum = [{ id: 'c1', name: "suchi", amount:'2', price: 12.99}]
    const cartItems = (
        <ul className={classes['cart-items']}>
            {dum.map((item) => <li>{item.name}</li>)}
        </ul>
    );

    return (
        <div>
            {cartItems}
            <div className={classes.total}>
                <span>total amount</span>
                <span>35.22</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']}>close</button>
                <button className={classes.button}>order</button>
            </div>
        </div>
    )
};

export default Cart;