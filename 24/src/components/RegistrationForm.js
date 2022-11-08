import { useState } from "react";

const RegistrationForm = () => {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [confirmPasswordValue, setConfirmPasswordValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleEmailChange = ({ target: { value } }) => {
    if (errorMessage) {
      setErrorMessage("");
    }

    setEmailValue(value);
  };

  const handlePasswordChange = ({ target: { value } }) => {
    if (errorMessage) {
      setErrorMessage("");
    }

    setPasswordValue(value);
  };

  const handleConfirmPasswordChange = ({ target: { value } }) => {
    if (errorMessage) {
      setErrorMessage("");
    }

    setConfirmPasswordValue(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      emailValue === "" ||
      passwordValue === "" ||
      confirmPasswordValue === ""
    ) {
      setErrorMessage("You need to fill all fields");
      return;
    }

    let regexp =
      /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
    if (!regexp.test(emailValue)) {
      setErrorMessage("Please, enter valid email");
      return;
    }

    if (passwordValue != confirmPasswordValue) {
      setErrorMessage("Please, enter the same passwords");
      return;
    }

    console.log({
      email: emailValue,
      password: passwordValue,
      confirmPassword: confirmPasswordValue,
    });
  };

  const handleReset = () => {
    setEmailValue("");
    setPasswordValue("");
    setConfirmPasswordValue("");
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <h2>Registration Form</h2>

      <label>
        Email:{""}
        <input
          type="email"
          name="email"
          value={emailValue}
          onChange={handleEmailChange}
        />
      </label>

      <label>
        Password:{""}
        <input
          type="password"
          name="password"
          value={passwordValue}
          onChange={handlePasswordChange}
        />
      </label>

      <label>
        Confirm password:{""}
        <input
          type="password"
          name="confirmPassword"
          value={confirmPasswordValue}
          onChange={handleConfirmPasswordChange}
        />
      </label>

      {errorMessage && <div className="error">{errorMessage}</div>}

      <button type="submit">Submit</button>
      <button type="reset" onClick={handleReset}>
        Reset
      </button>
    </form>
  );
};

export default RegistrationForm;
