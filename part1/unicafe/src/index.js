import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Data = (props) => {
  if(props.allClicks===0){
    return(
      <div>
        No feedback given
      </div>
    )
  }
  else{
    return(      
      <Statistics 
        good={props.good}
        neutral={props.neutral}
        bad={props.bad}
        formatPositivePercentage={props.formatPositivePercentage}
        average={props.average}
        total={props.total}
        />      
    )
    }
}

const Statistics = ({good,neutral,bad}) => {
  const total = good+bad+neutral
  const average = total === 0 ? 0 : (good - bad) / total;
  const positivePercentage = total === 0 ? 0 : (good / total) * 100;
  const formatPositivePercentage = positivePercentage + '%'
    return(
      <>
      
      <h1>statistics</h1> 
      <table>
        
      <StatisticLine  counter={good} text="good" />                            
      <StatisticLine  counter={neutral} text="neutral" />                           
      <StatisticLine  counter={bad} text="bad"/>
      <StatisticLine  counter={total} text="total"/>
      <StatisticLine  counter={average} text="average"/>
      <StatisticLine  counter={formatPositivePercentage} text="positive"/>
      
      </table>  

      </>
             
    )
}

const Button = ({handleClick,text}) =>(      
        <button onClick={handleClick}>
          {text}
        </button>
)


const StatisticLine  = ({counter,text})=>(
      <tr>
        <td>{text}  </td>
        <td>{counter}</td>
      </tr>         
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allClicks,setAllClicks] = useState(0)

  const increaseGood = () => {
    setGood(good + 1) 
    setAllClicks(allClicks+1)
  }
  const increaseNeutral = () => {
    setNeutral(neutral + 1)
    setAllClicks(allClicks+1)
  }

  const increaseBad = () => {
    setBad(bad + 1)
    setAllClicks(allClicks+1)}

  

  return (
    <div>
      <h1>give feedback</h1>

       <Button
        handleClick={increaseGood}
        text='good'
       />

       <Button
        handleClick={increaseNeutral}
        text='neutral'
       />

       <Button
        handleClick={increaseBad}
        text='bad'
       />
      <Data allClicks={allClicks} good={good} neutral={neutral} bad={bad}/>            
      
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)