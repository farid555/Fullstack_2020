import React from 'react';




const Persons = ({ persons, filterName, persondelete }) => {
    const filteringPersons = persons
        .filter(persons => persons.name.toLowerCase().includes(filterName.toLowerCase()))
    return (

        <div>
            {filteringPersons.map(persons => <li key={persons.name}>{persons.name} {persons.number}<button onClick={() => persondelete(persons.id)}>delete</button></li>)}
        </div>




    )
}

export default Persons