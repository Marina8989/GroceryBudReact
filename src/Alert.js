import React, {useEffect} from 'react';

const Alert = ({msg, type, removeAlert, list}) => {
   useEffect(() => {
       const timeout = setTimeout(() => {
            removeAlert();
       }, 3000);
       return () => clearTimeout(timeout);
   },[list])

    return (
        <div>
            <p className={`alert alert-${type}`}>{msg}</p>
        </div>
    )
}

export default Alert