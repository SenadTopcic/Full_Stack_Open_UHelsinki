
import React, { useState } from 'react';

function App() {
  //define states
const [good, setGood] = useState(0);
const [neutral, setNeutral] = useState(0);
const [bad, setBad] = useState(0);


//define event handlers for feedback
const handleGoodClick = () => {
  setGood(good + 1);
}
const handleNeutralClick = () => {
  setNeutral(neutral + 1);
}
const handleBadClick = () => {
  setBad(bad + 1);
}

return (
  <div>
      <h1>give feedback</h1>      
      <Button onClick={handleGoodClick} text="good" />
      <Button onClick={handleNeutralClick} text="neutral" />
      <Button onClick={handleBadClick} text="bad" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
}
const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)


const StatisticLine  = ({ text, value }) => {
  return (
  <tr>
    <td>{text}</td> 
    <td>{value}</td>
  </tr>
    )}

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral +bad;
  const average = (good - bad ) / all;
  const positive = (good / all)* 100 + " %";
  return (
    <div>
      <h1>statistics</h1>
      { (all  ===  0)?
          <p>No feedback given</p>
        :
          <table>
            <tbody>
            <StatisticLine  text="good" value={good} />
            <StatisticLine  text="neutral" value={neutral} />
            <StatisticLine  text="bad" value={bad} />
            <StatisticLine  text="all" value={all} />
            <StatisticLine  text="average" value={average} />
            <StatisticLine  text="positive" value={positive} />
            </ tbody>
          </table>
        
      }
    </div>
  )
}


export default App;
