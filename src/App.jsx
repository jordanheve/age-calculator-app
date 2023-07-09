import { useEffect, useRef, useState } from "react";
import Calculator from "./components/Calculator";
import Validator from "./components/Validator";
import "./App.css";
function App() {
  const dayRef = useRef();
  const monthRef = useRef();
  const yearRef = useRef();
  const [alert, setAlert] = useState({
    day: "",
    month: "",
    year: "",
  });
  const [validatedData, setValidatedData] = useState({});
  const labelRef = useRef();

  //Set the focus on the input when the page loads.
  useEffect(() => {
    dayRef.current.focus();
  }, []);

  /**
   * The handleSubmit function prevents the default form submission behavior, calls the Validator
   * function with certain parameters, and updates state variables.
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    Validator({ dayRef, monthRef, yearRef, setAlert, alert, setValidatedData });
  };

  return (
    <main className="main">
      <form className="form" onSubmit={handleSubmit}>
        <label
          className={"form-label" + (alert.day.length > 0 ? " alert" : "")}
          htmlFor="inputDay"
          ref={labelRef}
        >
          Day
        </label>
        <label
          className={"form-label" + (alert.month.length > 0 ? " alert" : "")}
          htmlFor="inputMonth"
        >
          Month
        </label>
        <label
          className={"form-label" + (alert.year.length > 0 ? " alert" : "")}
          htmlFor="inputYear"
        >
          Year
        </label>

        <div className="form-input-container">
          <input
            className={"form-input" + (alert.day.length > 0 ? " alert" : "")}
            inputMode="numeric"
            id="inputDay"
            ref={dayRef}
            placeholder="DD"
          />
          <br />
          <span
            className={
              "form-input__alert" + (alert.day.length > 0 ? " alert" : "")
            }
          >
            {alert.day}
          </span>
        </div>

        <div className="form-input-container">
          <input
            className={"form-input" + (alert.month.length > 0 ? " alert" : "")}
            inputMode="numeric"
            id="inputMonth"
            ref={monthRef}
            placeholder="MM"
          />
          <br />
          <span
            className={
              "form-input__alert" + (alert.month.length > 0 ? " alert" : "")
            }
          >
            {alert.month}
          </span>
        </div>

        <div className="form-input-container">
          <input
            className={"form-input" + (alert.year.length > 0 ? " alert" : "")}
            inputMode="numeric"
            id="inputYear"
            ref={yearRef}
            placeholder="YYYY"
          />
          <br />
          <span
            className={
              "form-input__alert" + (alert.year.length > 0 ? " alert" : "")
            }
          >
            {alert.year}
          </span>
        </div>
        <button className="form-btn" aria-label="Get current age">
          <div className="form-btn__icon">

          </div>
        </button>
      </form>
      <Calculator
        day={validatedData.day}
        month={validatedData.month}
        year={validatedData.year}
      />
    </main>
  );
}

export default App;
