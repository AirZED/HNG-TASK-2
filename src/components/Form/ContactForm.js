import { useState } from "react";

import classes from "./ContactForm.module.css";

//importing component
import Input from "../UI/Input";
import TextArea from "../UI/TextArea";

//importing hooks
import useValidation from "../../hooks/useValidation";
import { useRef } from "react";

const myName = "Mfoniso";

const ContactForm = (props) => {
  //custom hooks
  const {
    changeValueHandler: firstNameChangeHandler,
    onBlurHandler: firstNameOnBlurHandler,
    itemHasError: firstNameHasError,
    enteredValue: firstName,
    onClearField: clearFirstNameField,
  } = useValidation((val) => val !== "");

  const {
    changeValueHandler: lastNameChangeHandler,
    onBlurHandler: lastNameOnBlurHandler,
    itemHasError: lastNameHasError,
    enteredValue: lastName,
    onClearField: clearLastNameField,
  } = useValidation((val) => val !== "");

  const {
    changeValueHandler: emailChangeHandler,
    onBlurHandler: emailOnBlurHandler,
    itemHasError: emailHasError,
    enteredValue: email,
    onClearField: clearEmailField,
  } = useValidation((val) => val.includes(".") && val.includes("@"));

  const {
    changeValueHandler: messageChangeHandler,
    onBlurHandler: messageOnBlurHandler,
    itemHasError: messageHasError,
    enteredValue: message,
    onClearField: clearMessageField,
  } = useValidation((val) => val !== "");

  //internal states and refs
  const [confirm, setConfirm] = useState(false);
  const [submittedForm, setSubmitForm] = useState(false);
  const checkBoxRef = useRef();

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
    checkBoxRef.current.click();
    console.log(userInformation);

    //submission text
    setSubmitForm(true);
    setConfirm(false);

    clearEmailField();
    clearFirstNameField();
    clearMessageField();
    clearLastNameField();
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
          enteredValue={firstName}
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
          enteredValue={lastName}
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
        enteredValue={email}
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
        enteredValue={message}
      />

      <div className={classes["confirm-submit"]}>
        <input
          type={"checkbox"}
          onChange={confirmInputHandler}
          ref={checkBoxRef}
        />
        <p>You agree to providing your data to {myName} who may contact you</p>
      </div>
      <button id="btn__submit" type="submit" disabled={!formIsValid && true}>
        Send Message
      </button>

      {submittedForm && (
        <p className={classes.submitted}>Submitted Successfully</p>
      )}
    </form>
  );
};

export default ContactForm;
