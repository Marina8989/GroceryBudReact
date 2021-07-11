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
          // display show
        }else {
            //display show
            const newItem = {id: new Date().getTime().toString(), title: name};
            setList([...list, newItem]);
            setName('');
        }
    }
    return (
        <div>
          <form onSubmit={handleSubmit}>
              {alert.show && <Alert />}
              <h3>Grocery Bud</h3>
              <input type='text' placeholder="e.g. eggs" value={name} onChange={(e) => setName(e.target.value)}/>
              <button type="submit">{isEditing ? 'edit' : 'add'}</button>
          </form>
          <List items={list}/>
          <button>Clear All</button>
        </div>
    )
}


export default App 