import React from 'react'

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

export default Course
