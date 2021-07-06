import React, {useState} from 'react';
import List from './List';
import Alert from './Alert';

function App() {
    const [name, setName] = useState('');
    const [list, setList] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [editID, setEditID] = useState(null);
    const [alert, setAlert] = useState({show:false, msg: '', type: ''});

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('clicked');
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
              {alert.show ? <Alert /> : null}
                <h3>Grocery Bud</h3>
                <input type="text"  />
            </form>
            <List />
            <button type="button">Clear Items</button>
        </div>
    )
}


export default App 