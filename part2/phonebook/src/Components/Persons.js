import React from 'react';



const Persons = ({ persons, filterName }) => {
    return (

        <div>
            {persons.filter(note => note.name.toLowerCase().includes(filterName.toLowerCase())).map(note => <div key={note.name}>  {note.name} {note.number}
            </div>)}

        </div>


    )
}

export default Persons