import React from 'react'

const Notifi = ({ message, error }) => {
    if (message === null && error === null) {
        return null
    } else if (message !== null) {
        return (
            <div className="Emessage">
                {message}
            </div>
        )
    } else if (error !== null) {
        return (
            <div className="Eerror">
                {error}
            </div>
        )
    }
}

export default Notifi