import React, {useEffect} from 'react';

const Alert = ({msg, type, removeAlert}) => {
    useEffect(() => {
       const timeAlert = setTimeout(() => {
            removeAlert();
       }, 3000);
       return ()=> clearTimeout(timeAlert);
    },[])
    return (
        <div>
            <p className={`alert alert-${type}`}>{msg}</p>
        </div>
    )
}

export default Alert