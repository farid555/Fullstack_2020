import React from 'react';



const Persons = ({ persons, filterName, persondelete }) => {
    const filteringPersons = persons
        .filter(note => note.name.toLowerCase().includes(filterName.toLowerCase()))
    return (

        <div>
            {filteringPersons.map(note => <li key={note.name}>{note.name}{note.num}<button onClick={() => persondelete(note.id)}>delete</button></li>)}
        </div>




    )
}

export default Persons