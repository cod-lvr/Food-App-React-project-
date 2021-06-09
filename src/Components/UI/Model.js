import classes from "./Model.module.css";
import { Fragment } from "react";
import ReactDom from "react-dom";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose} />;
};

const ModelOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const Model = (props) => {
  const Portal = document.getElementById("overlays");
  return (
    <Fragment>
      {ReactDom.createPortal(<Backdrop onClose={props.onClose}/>, Portal)}
      {ReactDom.createPortal(
        <ModelOverlay>{props.children}</ModelOverlay>,
        Portal
      )}
    </Fragment>
  );
};

export default Model;
