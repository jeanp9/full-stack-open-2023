import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return(
    <div>
      <p>{props.course}</p>
    </div>
  )
} 

const Part = (props)=>{
    return(
      <div>
        <p>{props.part} {props.exercises}</p>
      </div>
    )
}

const Content = (props) =>{
  return(
    <div>
      <Part part={props.part1} exercises={props.exercises1} />
      <Part part={props.part2} exercises={props.exercises2}/>
      <Part part={props.part3} exercises={props.exercises3}/>
    </div>
  )
}

const Total = (props)=>{
  return(
    <div>
      <p>Number of exercises {props.exercises}</p>
    </div>
  )
}

const App = () => {
  
  const course = 'Half Stack application development'

  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      {/*<h1>{course}</h1>*/}
      <Header course={course}/>
{/*<p>
        {part1} {exercises1}
      </p>
      */}
        <Content part1={part1} part2={part2} part3={part3} exercises3={exercises3} exercises1={exercises1} exercises2={exercises2}/>
{/*
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    */}
      <Total exercises={exercises1+exercises2+exercises3}/>

    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))