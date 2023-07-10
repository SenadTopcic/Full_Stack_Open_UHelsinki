
import React, { useState } from 'react';

function App() {
  //define states
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  //set all points to 0
  const anegdotePoints = {};
  anecdotes.forEach((anegdote, index) => {
    anegdotePoints[index] = 0;  
  });
  //make a copy of anegdotePoints keep original object immutable
  const copyAnegdotePoints = {...anegdotePoints};
  
  //define state for vote based on anegdotePoints
  const [vote, setVote] = useState(copyAnegdotePoints);
  const [selected, setSelected] = useState(0);

  //make random andegdote
  const randomAnecdote = () => {
  setSelected(Math.floor(Math.random() * anecdotes.length)); 
  }
  //update votes
  const updateVotes = () => {
    const updateVote = { ...vote}
    updateVote[selected] += 1;
    setVote(updateVote);
  } 

  //Object.keys take a keys
  const mostVotes = Object.keys(vote).reduce((a, b) => vote[a] > vote[b] ? a : b);

  //console.log(mostVotes);

  return (
    <div>
      <h1>Anecdote of the day</h1>
      { mostVotes ? anecdotes[selected]:"koloko"} <br /> has {vote[selected]} votes < br />
      
      <Button onClick={randomAnecdote} text="next anecdote" />
      <Button onClick={updateVotes} text="vote" />
      <h1>Anecdote with most votes</h1>
      { anecdotes[mostVotes]} <br /> has {vote[mostVotes]} votes < br />
      
    </div>
  );
}

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

export default App;
