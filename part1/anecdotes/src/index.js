import React, { useState } from 'react'
import ReactDOM from 'react-dom'




const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>
}

/*const randomizer = () => setSelected([Math.floor(Math.random() * 6)])
console.log(props)*/

const App = (props) => {

  const [selected, setSelected] = useState(0)
  const [points, increaseArr] = useState(new Array(props.anecdotes.length + 1).join('0').split('').map(parseFloat))
  const randomizer = () => setSelected([Math.floor(Math.random() * props.anecdotes.length)])
  console.log(props)


  const increaseVote = () => {
    const copy = [...points]
    copy[selected] += 1
    increaseArr(copy)
  }



  function maxVotz() {
    let hotpot = 0
    let coldpotato = 0
    for (let i = 0; i <= props.anecdotes.length; i++) {
      if (points[i] >= hotpot) {
        hotpot = points[i]
        coldpotato = i
      }
    }
    return coldpotato
  }
  //{props.anecdotes[selected]} </h4>
  return (
    <div>
      <h1>Anecdote of the day </h1>
      <h4> {props.anecdotes[selected]} </h4>
      <p>{points[selected]} votes</p>
      <Button handleClick={randomizer} text='next anecdote' />
      <Button handleClick={increaseVote} text='vote' />
      <h1>Anecdote with most votes </h1>

      <p>{points[selected]} votes</p>
      <p>{props.anecdotes[maxVotz()]}<br />has {points[maxVotz()]} votes</p>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById('root'))