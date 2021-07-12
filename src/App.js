import React, {useState, useEffect} from 'react';
import List from './List';
import Alert from './Alert';

function App() {
    const [name, setName] = useState('');
    const [list, setList] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [editID, setEditID] = useState(null);
    const [alert, setAlert] = useState({show: false, msg: '', type: ''});

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!name) {
           // display alert
        }else if(name && isEditing) {
          // show edit
        }else {
          showAlert(true, 'added item', 'success');
          const newItem = {id: new Date().getTime().toString(), title: name};
          setList([...list, newItem])
          setName('');
        }
    }
    const showAlert = (show=false, msg='', type='') => {
       setAlert({show, msg, type});
    }
    
    return (
        <div>
          <form onSubmit={handleSubmit}>
              {alert.show && <Alert {...alert} removeAlert={showAlert}/>}
              <h2>Grocery Bud App</h2>
              <input type="text" placeholder="e.g. eggs" onChange={(e) => setName(e.target.value)} value={name}/>
              <button type="submit">{isEditing ? 'edit' : 'add'}</button>
          </form>
          {list.length > 0 && (
             <div>
              <List items={list}/>
              <button>Clear all</button>
             </div>
          )}
        </div>
    )
}


export default App 