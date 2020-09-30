import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './Components/Filter'
import PersonForm from './Components/PersonForm'
import Persons from './Components/Persons'




const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterName, setNewfilter] = useState('')

  const hook = () => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }

  useEffect(hook, [])


  const addInfo = (event) => {
    event.preventDefault()
    console.log('button cliked', event.target)
    const noteObject = {
      name: newName,
      number: newNumber,
      /*  date: new Date().toISOString(),
        important: Math.random() < 0.5,
      id: persons.length + 1,*/
    }

    if (persons.some(note =>
      note.name === newName)) {
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
        addInfo={addInfo} handleChangename={handleChangename} handleChangenumber={handleChangenumber} name={newName} number={newNumber} />
      <h2>Numbers</h2>

      <Persons persons={persons} filterName={filterName} />







    </div>


  )
}

export default App
