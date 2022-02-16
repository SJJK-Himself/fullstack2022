import React from 'react'

const Course = (props) => {

const course = props.course

    // Renderöi kurssin nimen
    const Header = (props) => { 
      console.log('Kurssin nimeä renderöidään...')
      return (
          <h1>
            {props.course}
          </h1>
      )
    }
  
  
    // Renderöi Part-komponentteja, jotka renderöivät osan nimen ja sen tehtävien lukumäärän
    const Content = ({parts}) => {
        console.log('Kurssin osia renderöidään...')
        return(
            <div>
                {parts.map((part) => (
                    <Part key={part.id} part={part} />
                ))}
            </div>
        )
    }
  
  
    // Renderöi osan nimen ja sen tehtävien lukumäärän
    const Part = ({ part }) => {
        return (
          <p>
            Exercises in {part.name}: {part.exercises}
          </p>
        )
    }


    const Total = ({parts}) => {
        const initVal = 0
        const total = parts.reduce((amt, part) => amt + part.exercises, initVal);
        return (
          <p>
            Total number of exercises: {total}
          </p>
        )
    }

    
    return(
        <div>
            <Header course  ={course.name}/>
            <Content parts  ={course.parts}/>
            <Total parts    ={course.parts}/>
        </div>
    )
}

export default Course