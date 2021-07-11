import React, {useEffect} from 'react';

const Alert = ({msg, type}) => {
    return (
        <div>
            <p className={`alert alert-${type}`}>{msg}</p>
        </div>
    )
}

export default Alert