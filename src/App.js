import React, { useState, useEffect } from 'react';
import './App.css';
import Button from './Button';

function App() {
  const [count, setCount] = useState(0);
  const [countHistory, setCountHistory] = useState([]);

  const incrementCount = increment => {
    setCount(count + increment);
  };

  const resetCount = () => {
    setCount(count - count);
  };

  const saveCount = () => {
    setCountHistory([...countHistory, count]);
    resetCount();
  };

  // useEffect(() => console.log(countHistory));

  const history = countHistory.map((val, ind) => (
    <span className="countCard" key={ind}>
      {val}
    </span>
  ));

  const clearHistory = () => {
    setCountHistory([]);
  };

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <p>
        Use the top row of buttons to increment the count by the button value
        and the bottom row to decrement the count. You can also clear and save
        the count. Happy counting!
      </p>
      <div className="countCols">
        <div className="increment">
          <Button increment={1} onClickFunction={incrementCount} />
          <Button increment={10} onClickFunction={incrementCount} />
          <Button increment={100} onClickFunction={incrementCount} />
          <Button increment={1000} onClickFunction={incrementCount} />
        </div>
        <div className="increment">
          <Button increment={-1} onClickFunction={incrementCount} />
          <Button increment={-10} onClickFunction={incrementCount} />
          <Button increment={-100} onClickFunction={incrementCount} />
          <Button increment={-1000} onClickFunction={incrementCount} />
        </div>
      </div>
      <span>{count}</span>
      <Button increment={'Reset Count'} onClickFunction={resetCount} />
      <Button increment={'Save Count'} onClickFunction={saveCount} />
      <Button increment={'Clear History'} onClickFunction={clearHistory} />
      <div className="countHistory">{history}</div>
    </div>
  );
}

export default App;
