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

      <Display text='good' value={good} />
      <Display text='neutral' value={neutral} />
      <Display text='bad' value={bad} />
      <StatisticsValue />
    </div>
  )
}
const StatisticsValue = ({ good, bad, neutral }) => {
  const all = good + bad + neutral
  const average = (good - bad) / all
  const positive = (good / all) * 100
  return (
    <div>
      <p>All {all}</p>
      <p>average {average}</p>
      <p>positive {positive}</p>
    </div>

  )
}

ReactDOM.render(<App />, document.getElementById('root')
)

