import React, { useState } from 'react'
import ReactDOM from 'react-dom'

/**
 * Shuffles array in place. ES6 version
 * https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
 * @param {Array} a items An array containing the items.
 */
function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const Anecdote = ({anecdote}) => <div>{anecdote}</div>

const VoteDisplay = ({votes}) => <div>has {votes} votes</div>

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(props.anecdotes.map(() => 0))

  const nextAnecdote = () => {
    const indices = props.anecdotes.map((v, index) => index)
    indices.splice(selected, 1)
    shuffle(indices)
    setSelected(indices[0])
  }

  const vote = () => {
    const copy = [...points]
    copy[selected] += 1
    setPoints(copy)
  }

  const getMostVotesIndex = () => {
    const indices = points.map((v, i) => i)
    const sorted = indices.sort((index1, index2) => points[index2] - points[index1])
    return sorted[0]
  }

  const mostVotesIndex = getMostVotesIndex()

  return (
    <>
      <h1>Anecdote of the day</h1>
      <Anecdote anecdote={props.anecdotes[selected]} />
      <VoteDisplay votes={points[selected]} />
      <button onClick={vote}>vote</button>
      <button onClick={nextAnecdote}>next anecdote</button>
      <h1>Anecdote with most votes</h1>
      <Anecdote anecdote={props.anecdotes[mostVotesIndex]} />
      <VoteDisplay votes={points[mostVotesIndex]} />
    </>
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