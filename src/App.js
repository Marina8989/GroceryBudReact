import React, {useState, useEffect} from 'react';
import List from './List';
import Alert from './Alert';

const getLocalStorage = () => {
    let list = localStorage.getItem('list');
    if(list) {
        return JSON.parse(localStorage.getItem('list'))
    }
    return [];
}


function App() {
    const [name, setName] = useState('');
    const [list, setList] = useState(getLocalStorage());
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
          setList(list.map(item => {
              if(item.id === editID) {
               return {...item , title: name}
              }
             return item 
          }))
          setIsEditing(false);
          setName('');
          setEditID(null);
          showAlert(true, 'item updated', 'success');
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
    const editItem = (id) => {
       const specialItem = list.find(item => item.id === id);
       setIsEditing(true);
       setEditID(id);
       setName(specialItem.title);
    }

    useEffect(() => {
        localStorage.setItem('list', JSON.stringify(list))
    }, [list])
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
              <List items={list} removeItem={removeItem} editItem={editItem}/>
              <button type="button" onClick={clearList}>Clear All</button>
            </div>
          )}
          
        </div>
    )
}


export default App 