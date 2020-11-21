import React from 'react'
import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { displayNotification, undisplayNotification } from '../reducers/notificationReducer'
import anecdoteService from '../service/anecdotes'


const AnecdoteForm = () => {
    const dispatch = useDispatch()
    const undisplay = () => dispatch(undisplayNotification(''))



    const addAnecdote = async (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        event.target.anecdote.value = ''
        const newAnecdote = await anecdoteService.createAnecdote(content)
        dispatch(createAnecdote(newAnecdote))
        dispatch(displayNotification(`'${content}' was created`))
        setTimeout(
            undisplay
            , 5000)
    }

    return (
        <div>
            <h2>create new</h2>
            <form onSubmit={addAnecdote}>
                <div><input name="anecdote" /></div>
                <button type="submit">add</button>
            </form>
        </div>
    )
}
export default AnecdoteForm 