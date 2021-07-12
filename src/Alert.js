import React, {useEffect} from 'react';

const Alert = ({msg, type, removeAlert}) => {
   useEffect(() => {
       const timeout = setTimeout(() => {
            return removeAlert();
       }, 3000);
       return () => clearTimeout(timeout);
   },[])

    return (
        <div>
            <h2 className={`alert alert-${type}`}>{msg}</h2>
        </div>
    )
}

export default Alert