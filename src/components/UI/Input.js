import classes from "../Form/ContactForm.module.css";

const Input = (props) => {
  return (
    <div className={props.className && props.className}>
      <label htmlFor={props.id}>{props.el}</label>
      <input
        className={props.inputHasError ? classes.error : ""}
        type={props.type}
        placeholder={props.placeholder}
        id={props.id}
        value={props.enteredValue}
        onChange={props.updateInput}
        onBlur={props.updateBlur}
      />
      {props.inputHasError && (
        <span className={props.errorClassName}>{props.error}</span>
      )}
    </div>
  );
};

export default Input;
