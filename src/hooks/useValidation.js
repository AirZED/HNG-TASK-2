import { useState } from "react";

const useValidation = (validateFn) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const isValid = validateFn(enteredValue);
  const itemHasError = !isValid && isTouched;

  const changeValueHandler = (event) => {
    setEnteredValue(event.target.value);
    setIsTouched(true);
  };

  const onBlurHandler = () => {
    setIsTouched(true);
  };

  const onClearField = () => {
    setEnteredValue("");
    setIsTouched(false);
  };
  return {
    changeValueHandler,
    onBlurHandler,
    itemHasError,
    enteredValue,
    isTouched,
    onClearField,
  };
};

export default useValidation;
