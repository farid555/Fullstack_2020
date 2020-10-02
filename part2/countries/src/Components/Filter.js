import React from 'react'

const Filter = ({ handlefilter, filter }) => {
    return (
        <div>
            find countries: <input onChange={handlefilter} value={filter} />
        </div>
    )
}

export default Filter







