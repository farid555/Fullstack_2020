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
      <Part1 part_1={props.pa_rt1} exer_cises={props.exercises_1} />
      <Part2 part_2={props.pa_rt2} exer_cises={props.exercises_2} />
      <Part3 part_3={props.pa_rt3} exer_cises={props.exercises_3} />

    </div>
  )
}
const Part1 = (props) => {

  return (
    <div>
      <p>{props.part_1} {props.exer_cises} </p>
    </div>
  )
}
const Part2 = (props) => {

  return (
    <div>
      <p>{props.part_2} {props.exer_cises} </p>
    </div>
  )
}
const Part3 = (props) => {

  return (
    <div>
      <p>{props.part_3} {props.exer_cises} </p>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.total} </p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course} />
      <Content pa_rt1={part1.name} exercises_1={part1.exercises} />
      <Content pa_rt2={part2.name} exercises_2={part2.exercises} />
      <Content pa_rt3={part3.name} exercises_3={part3.exercises} />

      <Total total={part1.exercises + part2.exercises + part3.exercises} />
    </div>
  )

}


ReactDOM.render(<App />, document.getElementById('root'))
