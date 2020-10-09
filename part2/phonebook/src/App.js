import React, { useState, useEffect } from 'react'
import Filter from './Components/Filter'
import PersonForm from './Components/PersonForm'
import Persons from './Components/Persons'
import servicepersons from './services/persons'
import Notifi from './Components/Notifi'
import './index.css'


const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterName, setNewfilter] = useState('')
  const [message, setMessage] = useState(null)
  const [error, setError] = useState(null)


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

    if (persons.every((p) => p.name.toLowerCase() !== newName.toLowerCase())) {
      servicepersons
        .create(noteObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setNewName('')
          setNewNumber('')
          //notification
          setMessage(`Added ${returnedPerson.name}`)
          setTimeout(() => {
            setMessage(null)
          }, 5000)
        })
        .catch(a => {
          setError(a.response.data.error)
          setTimeout(() => {
            setError(null)
          }, 5000);
        })
    }
    //perseon already there
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
        setPersons(persons.map(p => p.id !== identity ? p : returnedPerson))
        setNewName('')
        setNewNumber('')
        // Notification
        setMessage(`Updated ${returnedPerson.name}`)
        setTimeout(() => {
          setMessage(null)
        }, 5000)
      })

      .catch(a => {
        if (a.response.status === 400) {

          setError(a.response.data.error)
          setTimeout(() => {
            setError(null)
          }, 5000)
        }

        else {
          setPersons(persons.filter(w => w.id !== identity))
          setError(`Information of ${person.name} has already been removed from the server`)
          setTimeout(() => {
            setError(null)
          }, 5000)
          setNewName('')
          setNewNumber('')
        }
      })
  }

  const persondelete = (id) => {
    const person = persons.find(z => z.id === id)

    if (window.confirm(`Delete ${person.name}?`)) {
      servicepersons
        .deleteEntry(id)
        .then(ignored => {
          setPersons(persons.filter(z => id !== z.id))
          setMessage(`${person.name} was deleted`)
          setTimeout(() => {
            setMessage(null)
          }, 5000);
        })
        .catch(e => {
          setError(`Information of ${person.name} has already been removed from the server`)
          setTimeout(() => {
            setError(null)
          }, 5000)
        })

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
      <Notifi error={error} message={message} />
      <Filter value={filterName} handlefilterChange={handlefilterChange} />

      <h2>Add new number</h2>

      <PersonForm
        addInfo={addInfo} handleChangename={handleChangename} handleChangenumber={handleChangenumber} name={newName} number={newNumber} />
      <h2>Numbers</h2>

      <Persons persons={persons} filterName={filterName} persondelete={persondelete} />

    </div>


  )


}





export default App
