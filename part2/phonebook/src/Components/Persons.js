import React from 'react';



const Persons = ({ persons, filterName }) => {
    return (

        <div>
            {persons.filter(note => note.content.toLowerCase().includes(filterName.toLowerCase())).map(note => <div key={note.content}>  {note.content} {note.numb}
            </div>)}

        </div>


    )
}

export default Persons