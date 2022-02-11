import React, { useState } from 'react'

const Best = (props) => {
  let best = 0

  for (var i = 1; i < 6; i++) {
    if (props.likes[best] < props.likes[i]) {
      best = i
    }
  }

  return (
    <div>
      <p>{props.anecdotes[best]}</p>
      <p>has {props.likes[best]} votes</p>   
    </div>
    
  )
}


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.'
  ]

  const [likes, setLikes] = useState(new Uint8Array(anecdotes.length))
  const [selected, setSelected] = useState(0)

  const handleRandomClick = () => {
    //console.log('Clicked "Random anecdote"')
    setSelected(Math.floor(Math.random() * anecdotes.length))
    //console.log('Anecdote index: ', selected)
  }

  const handleVoteClick = () => {
    //console.log('Clicked "Like anecdote"')
    const copy = [...likes]
    copy[selected] += 1
    setLikes(copy)
    //console.log('Array "copy": ', copy)
    //console.log('Array "likes": ', likes)
  }

  return (
    <div>
      <h1>Programming anecdotes</h1>
      <p>{anecdotes[selected]}</p>
      <p>Likes: {likes[selected]}</p>
      <button onClick={handleVoteClick}>
        Like anecdote
      </button>
      <p></p>
      <button onClick={handleRandomClick}>
        Random anecdote
      </button>
      <h2>Most liked anecdote</h2>
      <Best likes={likes} anecdotes={anecdotes}/>
    </div>
  )
}

export default App