import classes from "./Header.module.css";
import { Fragment } from "react";
import HeaderCartButton from "../UI/HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>MyMeal</h1>
        <HeaderCartButton onClick={props.onShow}/>
      </header>
      <div className={classes["main-image"]}>
      </div>
    </Fragment>
  );
};

export default Header;
