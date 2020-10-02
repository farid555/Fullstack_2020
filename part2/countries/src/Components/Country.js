import React from 'react'
import axios from 'axios'

const iconStyle = {
    width: '125px'
}

const Country = ({ country }) => {

    return (
        <div>
            <h1>{country.name}</h1>
            <p>capital {country.capital}<br />
          population {country.population}</p>
            <h2>
                Spoken languages
          </h2>
            <ul>
                {country.languages.map(m => <li key={m.iso639_1}>{m.name}</li>)}
            </ul>
            <img src={country.flag} style={iconStyle} alt={country.name} />


        </div>
    )
}

export default Country 