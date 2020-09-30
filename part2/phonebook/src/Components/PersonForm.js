import React from 'react';

const PersonForm = ({ addInfo, handleChangename, handleChangenumber, content, numb }) => {
    console.log(handleChangename, handleChangenumber)
    return (

        <form onSubmit={addInfo}>
            <div>
                name: <input value={content} onChange={handleChangename} />
                <div>number: <input value={numb} onChange={handleChangenumber} /></div>
            </div>
            <div>
                <button type="sibmit">add</button>
            </div>
        </form>

    )
}

export default PersonForm
