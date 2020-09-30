import React, { useState } from 'react'
import Filter from './Components/Filter'
import PersonForm from './Components/PersonForm'
import Persons from './Components/Persons'


const App = () => {
  const [persons, setPersons] = useState([
    { content: 'Arto Hellas', numb: '040-123456' },
    { content: 'Ada Lovelace', numb: '39-44-5323523' },
    { content: 'Dan Abramov', numb: '12-43-234345' },
    { content: 'Mary Poppendieck', numb: '39-23-6423122' }
  ])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterName, setNewfilter] = useState('')



  const addInfo = (event) => {
    event.preventDefault()
    console.log('button cliked', event.target)
    const noteObject = {
      content: newName,
      numb: newNumber,
      /*  date: new Date().toISOString(),
        important: Math.random() < 0.5,
      id: persons.length + 1,*/
    }

    if (persons.some(note =>
      note.content === newName)) {
      window.alert(`${newName} is already added to phonebook`)
      return
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
    setNewfilter(event.target.value)
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <Filter
        value={filterName} handlefilterChange={handlefilterChange} />
      <h2>Add new number</h2>

      <PersonForm
        addInfo={addInfo} handleChangename={handleChangename} handleChangenumber={handleChangenumber} content={newName} numb={newNumber} />
      <h2>Numbers</h2>

      <Persons persons={persons} filterName={filterName} />







    </div>


  )
}

export default App
