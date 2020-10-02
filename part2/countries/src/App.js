import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './Components/Filter'
import Countries from './Components/Countries'



const App = () => {
  const [countries, setCountries] = useState([])

  const [filter, setNewFilter] = useState('')

  useEffect(() => {
    console.log('effect')
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        console.log('promise fulfilled')
        setCountries(response.data)
      })
  }, [])







  const handleClicks = (event) => {
    console.log(event.target.value)
    setNewFilter(event.target.value)

  }
  const handlefilter = (event) => {
    console.log(event.target.value)
    setNewFilter(event.target.value)
  }

  return (
    <div>


      <Filter value={filter} handlefilter={handlefilter} />
      <br />
      <Countries
        countries={countries}
        filter={filter}
        handleClicks={handleClicks}
      />


    </div>
  )
}

export default App