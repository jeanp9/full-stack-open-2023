  import React, { useState } from 'react'
  import ReactDOM from 'react-dom'

  const Button = ({handleClick ,text}) =>{
    return(
      <>
      <button onClick={handleClick}>
          {text}
      </button>
      </>
    )
  }


  const App = (props) => {
    const [selected, setSelected] = useState(0)
    const [allVotes, setAll] = useState(new Uint8Array(6))

    const randomQuote=()=>{
      const randomIndex = Math.floor(Math.random()*anecdotes.length)
      setSelected(randomIndex)
    }
    const upVote=()=>{ 
      const copyVotes = [...allVotes]
      copyVotes[selected]+= 1
      setAll(copyVotes)
    }
   
    const indexOfMaxVotes = allVotes.indexOf(Math.max(...allVotes));

    return (     
      <div>
        <div>
          <h1>Anecdote of the day</h1>
          {props.anecdotes[selected]}      
        </div>
        <div>        
          has {allVotes[selected]} votes
        </div>
        
      <Button
      handleClick={randomQuote}
      text={'next anecdote'}
      />
      <Button
      handleClick={upVote}
      text={'vote'}
      />
      <div>
        <h1>Anecdotes with most votes</h1>
        {props.anecdotes[indexOfMaxVotes]}
        <div>
        has {allVotes[indexOfMaxVotes]} votes
        </div>
        
      </div>
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

  ReactDOM.render(
    <App anecdotes={anecdotes} />,
    document.getElementById('root')
  )

