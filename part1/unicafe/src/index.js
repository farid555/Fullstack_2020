import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>
}

const Display = (props) => {
  return (
    <div>{props.text} {props.value}</div>
  )
}



const App = () => {
  const [good, setGood] = useState(0)
  const [bad, setbad] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const all = good + bad + neutral

  const increasegoodByOne = () => setGood(good + 1)
  const increasebadByOne = () => setbad(bad + 1)
  const increaseByneutral = () => setNeutral(neutral + 1)





  return (
    <div>
      <h1>Give feedback!!!</h1>

      <Button handleClick={increasegoodByOne} text='good' />
      <Button handleClick={increasebadByOne} text='bad' />
      <Button handleClick={increaseByneutral} text='neutral' />
      <h1>Statistics...</h1>
      <StatisticsValue good={good} bad={bad} neutral={neutral} all={good + bad + neutral} positive={(good / all) * 100} average={good - bad / all} />


    </div>
  )
}
const StatisticsValue = (props) => {

  if (props.all === 0) {
    return (
      <p>No feedback given</p>
    )
  }

  return (
    <div>
      <p>good {props.good}</p>
      <p>bad {props.bad}</p>
      <p>neutral {props.neutral}</p>
      <p>all {props.all}</p>
      <p>average {props.average}</p>
      <p>positive {props.positive}</p>

    </div>

  )
}


ReactDOM.render(<App />, document.getElementById('root')
)

