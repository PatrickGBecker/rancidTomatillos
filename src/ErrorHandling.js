import React from 'react';
import './ErrorHandling.css'

const ErrorHandling = ({error}) => {
    return (
        <div>
            <h2 className='errorMsg'>{error}</h2>
        </div>
    )
}

export default ErrorHandling