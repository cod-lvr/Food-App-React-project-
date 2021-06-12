import {useContext, useEffect, useState} from 'react';

import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/cart-context';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = props => {
    const [btnIsHighlight, setBtnHighLight] = useState(false);
    const cartCtx = useContext(CartContext);
    const {items} = cartCtx;

    const numberOfCarItem = cartCtx.items.reduce((curr, item) => {
        return curr + item.amount;
    }, 0);

    const btnClasses = `${classes.button} ${btnIsHighlight ? classes.bump : ""}`;

    useEffect(() => {
        if (items.length === 0) {
            return;
        }
        setBtnHighLight(true);
        
       const timer = setTimeout(() => {
            setBtnHighLight(false);
        }, 300)

        return () =>{
            clearTimeout(timer);
        };

    }, [items]);

    return <button className={btnClasses} onClick={props.onClick}>
        <span className={classes.icon}>
            <CartIcon />
        </span>
        <span >Your Cart</span>
        <span className={classes.badge}>{numberOfCarItem}</span>
    </button>
}

export default HeaderCartButton;