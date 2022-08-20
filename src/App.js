import logo from "./logo.svg";
import "./App.css";

import classes from './App.module.css';

function App() {
  const onClickHandler = () => {
    console.log(`${process.env.REACT_APP_MY_KEY}`);
  };

  return (
    <div className="App">
      <button onClick={onClickHandler} className={classes.button}>Click Here</button>
    </div>
  );
}

export default App;
