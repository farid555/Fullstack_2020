import React from 'react';

const Filter = ({ filterName, handlefilterChange }) => {
    console.log(handlefilterChange)
    return (
        <div> filter shown with <input value={filterName} onChange={handlefilterChange} /> </div>
    )
}







export default Filter