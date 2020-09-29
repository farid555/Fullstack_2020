import React, { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { content: 'Arto Hellas', numb: '040-123456' },
    { content: 'Ada Lovelace', numb: '39-44-5323523' },
    { content: 'Dan Abramov', numb: '12-43-234345' },
    { content: 'Mary Poppendieck', numb: '39-23-6423122' }
  ])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterName, filter] = useState('')



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

  const handleChangename = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }
  const handleChangenumber = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }
  const handlefilterChange = (event) => {
    console.log(event.target.value)
    filter(event.target.value)
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addInfo}>
        <div>
          <div> filter shown with <input value={filterName} onChange={handlefilterChange} /> </div>
          <h2>add a new</h2>
          content: <input value={filterName} onChange={handleChangename} />
          <div> numb: <input value={newNumber} onChange={handleChangenumber} /> </div>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>

      <div>


        {persons.filter(note => note.content.toLowerCase().includes(filterName.toLowerCase())).map(note => <div key={note.content}> {note.content} {note.numb}
        </div>

        )}



      </div>

    </div>
  )
}

export default App
