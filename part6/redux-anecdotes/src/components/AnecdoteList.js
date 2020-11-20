import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { voteVote } from '../reducers/anecdoteReducer'

const AnecdoteList = () => {
    const anecdotes = useSelector(state => state)
    const dispatch = useDispatch()

    const vote = (id) => {
        //console.log('vote', id)
        dispatch(voteVote(id))

    }



    const sortAnecdotes = (anecdotes) => {
        return (
            anecdotes.sort((x, y) => y.votes - x.votes)
        )
    }

    return (
        <div>
            {sortAnecdotes(anecdotes).map(anecdote =>
                <div key={anecdote.id}>
                    <div>
                        {anecdote.content}
                    </div>
                    <div>
                        has {anecdote.votes}
                        <button onClick={() => vote(anecdote.id)}>vote</button>
                    </div>
                </div>
            )}</div>
    )
}

export default AnecdoteList