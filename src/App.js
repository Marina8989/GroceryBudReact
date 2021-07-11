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
           showAlert(true, 'please enter value', 'danger')
        }else if(name && isEditing) {
          // display show
        }else {
            //display show
            showAlert(true, 'added new item', 'seccess')
            const newItem = {id: new Date().getTime().toString(), title: name};
            setList([...list, newItem]);
            setName('');
        }
    }
    const showAlert = (show=false, msg='', type='') => {
       setAlert({show, msg, type})
    }
    const clearList = () => {
        showAlert(true, 'empty list', 'danger');
       setList([]);
    }
    const removeItem = (id) => {
      showAlert(true, 'item removed', 'danger');
      setList(list.filter(item => item.id != id))
    }
    return (
        <div>
          <form onSubmit={handleSubmit}>
              {alert.show && <Alert {...alert} removeAlert={showAlert}/>}
              <h3>Grocery Bud</h3>
              <input type='text' placeholder="e.g. eggs" value={name} onChange={(e) => setName(e.target.value)}/>
              <button type="submit">{isEditing ? 'edit' : 'add'}</button>
          </form>
          {list.length > 0 && (
            <div>
              <List items={list} removeItem={removeItem}/>
              <button type="button" onClick={clearList}>Clear All</button>
            </div>
          )}
          
        </div>
    )
}


export default App 