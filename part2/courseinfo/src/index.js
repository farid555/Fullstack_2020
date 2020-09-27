import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
    <div>
      <h1>{props.course.name}</h1>
    </div>
  )
}
const Part = (props) => {
  return (
    <p>
      {props.name} {props.exercises}
    </p>
  )
}
const Content = ({ course }) => {
  console.log('props', course)

  return (
    <div>
      {course.parts.map(todo => <Part key={todo.id} name={todo.name} exercises={todo.exercises} />)}
    </div>
  )
}
const Total = ({ course }) => {
  const total_sum = course.parts.reduce((acc, val) => {
    return acc + val.exercises
  }, 0)

  return (
    <div>
      <p><b>total of {total_sum} exercises </b></p>
    </div>
  )
}



const Course = ({ course }) => {
  console.log('props', course)
  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />

    </div>
  )
}
const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>

      {courses.map(note =>
        <Course key={note.id} course={note} />)}
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
