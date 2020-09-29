import React, { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { content: 'Arto Hellas' }
  ])
  const [newName, setNewName] = useState('')




  const addInfo = (event) => {
    event.preventDefault()
    console.log('button cliked', event.target)
    const noteObject = {
      content: newName,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
      id: persons.length + 1,
    }

    if (persons.some(note =>
      note.content === newName)) { window.alert('${newName} is already added to phonebook') }
    else { setPersons(persons.concat(noteObject)) }
    setNewName('')
    console.log('button cliked', event.target)
  }
  const handleNoteChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addInfo}>
        <div>
          name: <input value={newName} onChange={handleNoteChange} />

        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>

      <div>
        <ul>

          {persons.map(note =>
            <div key={note.content}> {note.content}
            </div>

          )}

        </ul>

      </div>

    </div>
  )
}

export default App
