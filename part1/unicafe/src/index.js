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

      <Statistic text='good ' value={props.good} />
      <Statistic text='bad ' value={props.bad} />
      <Statistic text='neutral ' value={props.neutral} />
      <Statistic text='all ' value={props.good + props.bad + props.neutral} />
      <Statistic text='average ' value={props.good - props.bad / props.all} />
      <Statistic text='positive ' value={(props.good / props.all) * 100 + '%'} />

    </div>

  )
}
const Statistic = (props) => (

  <div>{props.text}{props.value}</div>

)


ReactDOM.render(<App />, document.getElementById('root')
)

