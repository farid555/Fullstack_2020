/*const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]
*/

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

//const initialState = anecdotesAtStart.map(asObject)

const reducer = (state = [], action) => {
  console.log('state now: ', state)
  console.log('action', action)

  switch (action.type) {
    case 'VOTE':
      const id = action.data.id
      const anecdoteVote = state.find(vot => vot.id === id)
      const votedAnecdote = { ...anecdoteVote, votes: anecdoteVote.votes + 1 }
      return state.map(vote => vote.id !== id ? vote : votedAnecdote)

    case 'INITIALIZE_ANECDOTES':
      return action.data
    case 'NEW_ANE': {
      return [...state, asObject(action.data.content)]
    }
    default:
      return state
  }

}
export const voteVote = (id) => {
  return {
    type: 'VOTE',
    data: { id }
  }
}
export const initializeAnecdotes = (anecdotes) => {
  return {
    type: 'INITIALIZE_ANECDOTES',
    data: anecdotes
  }
}
export const createAnecdote = (content) => {
  return {
    type: 'NEW_ANE',
    data: { content }

  }
}

export default reducer