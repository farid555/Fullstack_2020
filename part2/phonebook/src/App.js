import React, { useState, useEffect } from 'react'
import Filter from './Components/Filter'
import PersonForm from './Components/PersonForm'
import Persons from './Components/Persons'
import servicepersons from './services/persons'


const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterName, setNewfilter] = useState('')

  useEffect(() => {
    servicepersons
      .getAll()
      .then(initialNotes => {
        setPersons(initialNotes)
      })
  }, [])

  const addInfo = (event) => {
    event.preventDefault()
    console.log('button cliked', event.target)
    const noteObject = {
      name: newName,
      number: newNumber,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
      id: persons.length + 1,
    }

    servicepersons
      .create(noteObject)
      .then(returnedNote => {
        setPersons(persons.concat(returnedNote))
        setNewName('')
      })



    if (persons.some(note =>
      note.name === newName)) {
      window.alert(`${newName} is already added to phonebook`)
    }
    else {
      setPersons(persons.concat(noteObject))
      setNewName('')
      setNewNumber('')

    }
  }
  const persondelete = (id) => {
    servicepersons
      .cancel(id)
      .then(response => {
        const dele = persons.filter(note => id !== note.id)
        setPersons(dele)
      })

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
        addInfo={addInfo} handleChangename={handleChangename} handleChangenumber={handleChangenumber} name={newName} number={newNumber} />
      <h2>Numbers</h2>

      <Persons persons={persons} filterName={filterName} persondelete={persondelete} />

    </div>


  )


}



export default App
