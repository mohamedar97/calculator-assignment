import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useState } from "react";

import "./App.css";
import Button from "./components/Button";

function App() {
  const [expression, setExpression] = useState("");
  const [displayValue, setDisplayValue] = useState("");
  const [history, setHistory] = useState([]);
  // const [result, setResult] = useState("");

  // console.log(history);

  const modifyValues = (type, value) => {
    if (value === "History") {
      return;
    }
    if (value === "Clear") {
      setDisplayValue("");
      setExpression("");
      return;
    }
    if (value === "Cos") {
      let finalEquation = Math.cos(expression);
      setDisplayValue(finalEquation);
      setHistory((prevState) => {
        return [...prevState, `Cos(${displayValue})=${finalEquation}`];
      });
      return;
    } else if (value === "Sin") {
      let finalEquation = Math.sin(expression);
      setDisplayValue(finalEquation);
      setHistory((prevState) => {
        return [...prevState, `Sin(${displayValue})=${finalEquation}`];
      });
      return;
    } else if (value === "Sqrt") {
      let finalEquation = Math.sqrt(expression);
      setDisplayValue(finalEquation);
      setHistory((prevState) => {
        return [...prevState, `Sqrt(${displayValue})=${finalEquation}`];
      });
      return;
    } else if (value === "^2") {
      let finalEquation = Math.pow(expression, 2);
      setDisplayValue(finalEquation);
      setHistory((prevState) => {
        return [...prevState, `${displayValue}^2=${finalEquation}`];
      });
      return;
    }
    if (type === "value") {
      setExpression((prevState) => {
        return prevState + value;
      });
      setDisplayValue((prevState) => {
        return prevState + value;
      });
    } else if (type === "operator") {
      setExpression((prevState) => {
        return prevState + value;
      });
      setDisplayValue("");
    } else if (type === "equal") {
      if (expression === "") {
        return;
      }
      let result = eval(expression);
      let finalEquation = expression + value + result;
      setHistory((prevState) => {
        return [...prevState, finalEquation];
      });
      setExpression((prevState) => {
        return "";
      });
      setDisplayValue(result);
    }
  };

  return (
    <div className="App">
      <div
        className="container mt-5 p-5 rounded-3"
        style={{ width: "fit-content", backgroundColor: "#F8F8F8" }}
      >
        <div className="d-flex flex-row mb-2 justify-content-center">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Value"
            onChange={(e) => {
              const pattern = /^[0-9.]+$/;
              if (pattern.test(e.target.value)) {
                setDisplayValue(e.target.value);
              }
            }}
            aria-label="screen"
            value={displayValue}
            aria-describedby="basic-addon1"
          ></input>
        </div>
        <div className="d-flex flex-row mb-2 justify-content-center">
          <Button
            type={"operator"}
            onClick={modifyValues}
            history={""}
            value={"Clear"}
          ></Button>
          <Button
            type={"operator"}
            onClick={modifyValues}
            history={history}
            value={"History"}
          ></Button>
        </div>
        <div className="d-flex flex-grow-1 flex-row mb-2 justify-content-center">
          <Button
            type={"value"}
            onClick={modifyValues}
            history={""}
            value={"1"}
          ></Button>
          <Button
            type={"value"}
            onClick={modifyValues}
            history={""}
            value={"2"}
          ></Button>
          <Button
            type={"value"}
            onClick={modifyValues}
            history={""}
            value={"3"}
          ></Button>
          <Button
            type={"operator"}
            onClick={modifyValues}
            history={""}
            value={"/"}
          ></Button>
        </div>
        <div className="d-flex flex-row mb-2 justify-content-center">
          <Button
            type={"value"}
            onClick={modifyValues}
            history={""}
            value={"4"}
          ></Button>
          <Button
            type={"value"}
            onClick={modifyValues}
            history={""}
            value={"5"}
          ></Button>
          <Button
            type={"value"}
            onClick={modifyValues}
            history={""}
            value={"6"}
          ></Button>
          <Button
            type={"operator"}
            onClick={modifyValues}
            history={""}
            value={"-"}
          ></Button>
        </div>
        <div className="d-flex flex-row mb-2 justify-content-center">
          <Button
            type={"value"}
            onClick={modifyValues}
            history={""}
            value={"7"}
          ></Button>
          <Button
            type={"value"}
            onClick={modifyValues}
            history={""}
            value={"8"}
          ></Button>
          <Button
            type={"value"}
            onClick={modifyValues}
            history={""}
            value={"9"}
          ></Button>
          <Button
            type={"operator"}
            onClick={modifyValues}
            history={""}
            value={"+"}
          ></Button>
        </div>
        <div className="d-flex flex-row mb-2 justify-content-center">
          <Button
            type={"value"}
            onClick={modifyValues}
            history={""}
            value={"."}
          ></Button>
          <Button
            type={"value"}
            onClick={modifyValues}
            history={""}
            value={"0"}
          ></Button>
          <Button
            type={"equal"}
            onClick={modifyValues}
            history={""}
            value={"="}
          ></Button>
          <Button
            type={"operator"}
            onClick={modifyValues}
            history={""}
            value={"*"}
          ></Button>
        </div>
        <div className="d-flex flex-row mb-2 justify-content-center">
          <Button onClick={modifyValues} history={""} value={"Sqrt"}></Button>
          <Button onClick={modifyValues} history={""} value={"^2"}></Button>
          <Button onClick={modifyValues} history={""} value={"Sin"}></Button>
          <Button onClick={modifyValues} history={""} value={"Cos"}></Button>
        </div>
      </div>
    </div>
  );
}

export default App;
