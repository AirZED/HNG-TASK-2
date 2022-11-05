import { useState } from "react";

import classes from "./ContactForm.module.css";

//importing component
import Input from "../UI/Input";
import TextArea from "../UI/TextArea";

//importing hooks
import useValidation from "../../hooks/useValidation";
import { useDebugValue } from "react";

const ContactForm = (props) => {
  //custom hooks
  const {
    changeValueHandler: firstNameChangeHandler,
    onBlurHandler: firstNameOnBlurHandler,
    itemHasError: firstNameHasError,
    enteredValue: firstName,
  } = useValidation((val) => val !== "");

  const {
    changeValueHandler: lastNameChangeHandler,
    onBlurHandler: lastNameOnBlurHandler,
    itemHasError: lastNameHasError,
    enteredValue: lastName,
  } = useValidation((val) => val !== "");

  const {
    changeValueHandler: emailChangeHandler,
    onBlurHandler: emailOnBlurHandler,
    itemHasError: emailHasError,
    enteredValue: email,
  } = useValidation((val) => val.includes(".") && val.includes("@"));

  const {
    changeValueHandler: messageChangeHandler,
    onBlurHandler: messageOnBlurHandler,
    itemHasError: messageHasError,
    enteredValue: message,
  } = useValidation((val) => val !== "");

  //internal states
  const [confirm, setConfirm] = useState(false);

  const confirmInputHandler = (event) => {
    setConfirm((state) => !state);
  };

  //form Validity
  let formIsValid = false;
  if (firstName && lastName && email && message && confirm) {
    formIsValid = true;
  }

  const submitHandler = (event) => {
    event.preventDefault();

    if (!firstName || !lastName || !email || !message || !confirm) {
      return;
    }
    const userInformation = { firstName, lastName, email, message };

    console.log(userInformation);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <h2>Contact Me</h2>
      <p>Hi there, contact me to ask me about anything you have in mind</p>
      <div className={classes["name-section"]}>
        <Input
          type="text"
          placeholder="Enter your first name"
          el="First name"
          id="first_name"
          error="First name cannot be blank"
          errorClassName={classes["error-message"]}
          updateInput={firstNameChangeHandler}
          updateBlur={firstNameOnBlurHandler}
          inputHasError={firstNameHasError}
        />
        <Input
          type="text"
          placeholder="Enter your last name"
          el="Last name"
          id="last_name"
          error="Last name cannot be blank"
          errorClassName={classes["error-message"]}
          updateInput={lastNameChangeHandler}
          updateBlur={lastNameOnBlurHandler}
          inputHasError={lastNameHasError}
        />
      </div>
      <Input
        className={classes["email-section"]}
        type="email"
        placeholder="yourname@email.com"
        el="Email"
        id="email"
        error="Input valid email"
        errorClassName={classes["error-message"]}
        updateInput={emailChangeHandler}
        updateBlur={emailOnBlurHandler}
        inputHasError={emailHasError}
      />
      <TextArea
        className={classes["message-box"]}
        type="text"
        placeholder="Send me a message and I'll  reply you as soon as possible"
        el="Message"
        id="message"
        error="Message cannot be blank"
        errorClassName={classes["error-message"]}
        updateInput={messageChangeHandler}
        updateBlur={messageOnBlurHandler}
        inputHasError={messageHasError}
      />

      <div className={classes["confirm-submit"]}>
        <input type={"checkbox"} onChange={confirmInputHandler} />
        <p>
          You agree to providing your data to {firstName} who may contact you
        </p>
      </div>
      <button id="btn__submit" type="submit" disabled={!formIsValid && true}>
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
