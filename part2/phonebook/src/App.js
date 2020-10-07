import React, { useState, useEffect } from 'react'
import Filter from './Components/Filter'
import PersonForm from './Components/PersonForm'
import Persons from './Components/Persons'
import servicepersons from './services/persons'
import './index.css'

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
    }

    if (persons.every((a) => a.name.toLowerCase() !== newName.toLowerCase())) {

      servicepersons
        .create(noteObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setNewName('')
          setNewNumber('')
        })
    }

    else if (window.confirm(`${newName} is already added to phonebook,
    replace the old number with a new one?`)) {

      updatePersons(noteObject)
    }
  }

  const updatePersons = (person) => {
    const identity = persons.find(w => w.name.toLowerCase() === person.name.toLowerCase()).id
    person = { ...person, id: identity }
    servicepersons
      .update(identity, person)
      .then(returnedPerson => {
        setPersons(persons.map(w => w.id !== identity ? w : returnedPerson))
        setNewName('')
        setNewNumber('')
      })
  }

  const persondelete = (id) => {
    const person = persons.find(note => note.id === id)
    if (window.confirm(`Sure you wanna delete ${person.name}?`)) {
      servicepersons
        .cancel(id)
        .then()
      setPersons(persons.filter(note => id !== note.id))
    }

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
