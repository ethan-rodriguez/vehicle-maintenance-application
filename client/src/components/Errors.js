import React from 'react'

const Errors = ({errors}) => {

    const generateErrors = () => {
        return errors.map(error => <ul key={error}><li style={{color:'red'}}>{error}</li></ul>)
    }

    return (
        <div>
            {generateErrors()}
        </div>
    )
}

export default Errors
