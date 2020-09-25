import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>
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
      <table>

        <thead>
          <tr>
            <td><Statistic text='good' /></td><td><Statistic value={props.good} /></td>
          </tr><tr>
            <td> <Statistic text='bad' /></td><td><Statistic value={props.bad} /></td>
          </tr><tr>
            <td><Statistic text='neutral' /></td><td><Statistic value={props.neutral} /></td>
          </tr><tr>
            <td> <Statistic text='all' /> </td><td><Statistic value={props.good + props.bad + props.neutral} /></td>
          </tr><tr>
            <td><Statistic text='average' /></td><td> <Statistic value={props.good - props.bad / props.all} /></td>
          </tr><tr>
            <td><Statistic text='positive' /></td><td><Statistic value={(props.good / props.all) * 100 + ' %'} /></td>
          </tr>
        </thead>
      </table>
    </div>
  )
}
const Statistic = (props) => {
  return (
    <div>
      {props.text}{props.value}
    </div>
  )
}


ReactDOM.render(<App />, document.getElementById('root'))

