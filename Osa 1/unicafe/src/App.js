import React, { useState } from 'react'

const Statistics = (props) => {
  if(props.total === 0){
    return(
      <div>
        <h2>Statistics</h2>
        <p>No votes given!</p>
      </div>
    )
  }
  else{
    return(
      <div>
        <StatisticLine good={props.good} bad={props.bad} neutral={props.neutral} total={props.total} average={props.average} posTotal={props.posTotal}/>
      </div>
    )
  }
}


const StatisticLine = (props) => {
  return(
    <table>
      <tbody>
        <tr>
          <td>Good: </td>
          <td>{props.good}</td>
        </tr>
        <tr>
          <td>Neutral: </td>
          <td>{props.neutral}</td>
        </tr>
        <tr>
          <td>Bad: </td>
          <td>{props.bad}</td>
        </tr>
        <tr>
          <td>Total votes: </td>
          <td>{props.total}</td>
        </tr>
        <tr>
          <td>Votes' average: </td>
          <td>{props.average}</td>
        </tr>
        <tr>
          <td>Positive votes: </td>
          <td>{props.posTotal}</td>
        </tr>
      </tbody>
    </table>
  )
}


const Button = (props) => {
  return(
    <button onClick={props.buttonHandler}>
      {props.buttonName}
    </button>
  )
}


const App = () => {
  const [good, setGood]       = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad]         = useState(0)
  const total    = good + neutral + bad
  const average  = (good * 1 + neutral * 0 + bad * (-1)) / total
  const posTotal = (good / total) * 100

  const handleGoodClick = () => {
    console.log('Clicked "Good"')
    setGood(good + 1)
  }
  const handleNeutClick = () => {
    console.log('Clicked "Neutral"')
    setNeutral(neutral + 1)
  }
  const handleBadClick = () => {
    console.log('Clicked "Bad"')
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>Give us feedback!</h1>
      <Button buttonHandler={handleGoodClick} buttonName="Good"/>
      <Button buttonHandler={handleNeutClick} buttonName="Neutral"/>
      <Button buttonHandler={handleBadClick} buttonName="Bad"/>
      <Statistics good={good} bad={bad} neutral={neutral} total={total} average={average} posTotal={posTotal}/>
    </div>
  )
}

export default App