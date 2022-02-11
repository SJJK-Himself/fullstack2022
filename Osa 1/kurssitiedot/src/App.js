import React from 'react'

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }

  return (
    <div>
      <Header course = {course.name} />
      <Content parts = {course.parts} />
      <Total parts = {course.parts} />
    </div>
  )
}


// Renderöi osan nimen ja sen tehtävien lukumäärän
const Part = (props) => {
  return (
    <div>
      Exercises in {props.contt}: {props.amt}
    </div>
  )
}


// Renderöi kurssin nimen
const Header = (props) => {
  return (
    <div>
      <h1>
        {props.course}
      </h1>
    </div>
  )
}


// Renderöi kolme Part-komponenttia, jotka renderöivät osan nimen ja sen tehtävien lukumäärän
const Content = (props) => {
  return (
    <div>
      <Part contt = {props.parts[0].name} amt = {props.parts[0].exercises}/>
      <Part contt = {props.parts[1].name} amt = {props.parts[1].exercises}/>
      <Part contt = {props.parts[2].name} amt = {props.parts[2].exercises}/>
    </div>
  )
}


// Renderöi tehtävien kokonaislukumäärän
const Total = (props) => {
  return (
    <div>
      <p>
        Total number of exercises: {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}
      </p>
    </div>
  )
}

export default App