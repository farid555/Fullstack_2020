import React, { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { content: 'Arto Hellas', numb: '000' },
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')




  const addInfo = (event) => {
    event.preventDefault()
    console.log('button cliked', event.target)
    const noteObject = {
      content: newName,
      numb: newNumber,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
      id: persons.length + 1,
    }

    if (persons.some(note =>
      note.content === newName)) { window.alert(`${newName} is already added to phonebook`) }
    else {
      setPersons(persons.concat(noteObject))
      setNewName('')
      console.log('button cliked', event.target)
    }
    setPersons(persons.concat(noteObject))
    setNewName('')
    setNewNumber('')
  }

  const handleNoteaChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }
  const handleNotebChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addInfo}>
        <div>
          name: <input value={newName} onChange={handleNoteaChange} />
          <div> number: <input value={newNumber} onChange={handleNotebChange} /> </div>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>

      <div>
        <ul>

          {persons.map(note =>
            <div key={note.content}> {note.content} {note.numb}
            </div>

          )}

        </ul>

      </div>

    </div>
  )
}

export default App
