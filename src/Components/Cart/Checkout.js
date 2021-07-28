import {useRef, useState} from 'react';
import classes from "./Checkout.module.css";

const isEmpty = value => value.trim() === '';
const isNotFive = value => value.trim().length !== 5;

const Checkout = (props) => {
    const [formInputValidtity, setFormInputValidity] = useState({
        name: true,
        street: true,
        city: true,
        postalCode:true,
    });

    const nameInputRef = useRef();
    const streetInputRef = useRef();
    const postalInputRef = useRef();
    const cityInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostal = postalInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const validName = !isEmpty(enteredName);
    const validStreet = !isEmpty(enteredStreet);
    const validPostal = !isEmpty(enteredPostal);
    const validCity = isNotFive(enteredCity);

    setFormInputValidity({
        name: validName,
        street: validStreet,
        city: validCity,
        postalCode: validPostal,
    });

    const validForm = validCity && validName && validPostal && validStreet;

    if (!validForm) {
        return;
    }
    props.onConfirm({
        name: enteredName,
        street: enteredStreet,
        city: enteredCity,
        postalCode: enteredPostal,
    })
  };

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={classes.control}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInputRef}/>
        {formInputValidtity.name && <p>please enter valid name</p>}
      </div>
      <div className={classes.control}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInputRef}/>
        {formInputValidtity.street && <p>please enter valid street</p>}
      </div>
      <div className={classes.control}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={postalInputRef}/>
        {formInputValidtity.postalCode && <p>please enter valid postal</p>}
      </div>
      <div className={classes.control}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef}/>
        {formInputValidtity.city && <p>please enter valid city</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
