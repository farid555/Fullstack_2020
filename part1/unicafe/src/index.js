import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const [bad, setbad] = useState(0)
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)

  const increasegoodByOne = () => setGood(good + 1)
  const increasebadByOne = () => setbad(bad + 1)
  const increaseByneutral = () => setNeutral(neutral + 1)



  const Display2 = ({ good }) => {
    return (
      <div>Good {good}</div>
    )
  }
  const Display3 = ({ neutral }) => {
    return (
      <div>Neutral {neutral}</div>
    )
  }
  const Display1 = ({ bad }) => {
    return (
      <div>bad {bad}</div>
    )
  }

  return (
    <div>
      <h1>Give feedback!!!</h1>

      <button onClick={increasegoodByOne}>Good</button>
      <button onClick={increaseByneutral}> Netural</button>
      <button onClick={increasebadByOne}>Bad</button>
      <h1>Statistics...</h1>

      <Display2 good={good} />
      <Display1 bad={bad} />
      <Display3 neutral={neutral} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root')
)

