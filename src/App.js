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
    }
    return (
        <div>
          <form onSubmit={handleSubmit}>
              {alert.show && <Alert />}
              <h2>Grocery Bud App</h2>
              <input type="text" placeholder="e.g. eggs" onChange={(e) => setName(e.target.value)} value={name}/>
              <button type="submit">{isEditing ? 'edit' : 'add'}</button>
          </form>
          <div>
              <List />
              <button>Clear all</button>
          </div>
        </div>
    )
}


export default App 