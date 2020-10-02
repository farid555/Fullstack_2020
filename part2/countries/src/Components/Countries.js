import React from 'react'
import Country from './Country'


const Countries = ({ countries, filter, handleClicks }) => {

    const filterlans = countries
        .filter(n => n.name.toLowerCase().includes(filter.toLowerCase()))

    if (filterlans.length > 10) {
        return 'Too many matches, specify another filter'
    } else if (filterlans.length === 1) {
        return <Country country={filterlans[0]} />
    } else {
        return (
            <ul>
                {filterlans.map(n => <li key={n.alpha2Code}>{n.name} <button onClick={handleClicks} value={n.name}>show</button></li>)}
            </ul>
        )
    }
}
export default Countries