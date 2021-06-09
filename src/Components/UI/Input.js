import classes from "./Input.module.css";

const Input = (props) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input {...props.Input} defaultValue={props.input.defaultValue}/>
    </div>
  );
};

export default Input;
