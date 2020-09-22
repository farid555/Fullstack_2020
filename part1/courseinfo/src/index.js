import React from 'react'
import ReactDOM from 'react-dom'


const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}
const Content = (props) => {
  console.log('props', props)

  return (
    <div>
      <Part1 part_1={props.parts[0].name} exer_cises1={props.parts[0].exercises} />
      <Part2 part_2={props.parts[1].name} exer_cises2={props.parts[1].exercises} />
      <Part3 part_3={props.parts[2].name} exer_cises3={props.parts[2].exercises} />
    </div>
  )
}
const Part1 = (props) => {

  return (
    <div>
      <p>{props.part_1} {props.exer_cises1} </p>
    </div>
  )
}
const Part2 = (props) => {

  return (
    <div>
      <p>{props.part_2} {props.exer_cises2} </p>
    </div>
  )
}
const Part3 = (props) => {

  return (
    <div>
      <p>{props.part_3} {props.exer_cises3} </p>
    </div>
  )
}

const Total = (props) => {
  console.log(props)
  return (
    <div>
      <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises} </p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]
  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )

}


ReactDOM.render(<App />, document.getElementById('root'))
