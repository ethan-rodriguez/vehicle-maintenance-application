import React from 'react'

const Errors = ({errors}) => {

    const generateErrors = () => {
        return errors.map(error => <p><ol>{error}</ol></p>)
    }

    return (
        <div>
            {generateErrors()}
        </div>
    )
}

export default Errors
