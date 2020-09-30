import React from 'react';

const PersonForm = ({ addInfo, handleChangename, handleChangenumber, name, number }) => {
    console.log(handleChangename, handleChangenumber)
    return (

        <form onSubmit={addInfo}>
            <div>
                name: <input value={name} onChange={handleChangename} />
                <div>number: <input value={number} onChange={handleChangenumber} /></div>
            </div>
            <div>
                <button type="sibmit">add</button>
            </div>
        </form>

    )
}

export default PersonForm
