import React, {useState, useEffect} from 'react';
import List from './List';
import Alert from './Alert';

const getLocalStorage = () => {
    let list = localStorage.getItem('list');
    if(list) {
      return (list = JSON.parse(localStorage.getItem('list')))
    }else {
      return [];
    }
    
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
           showAlert(true, 'Please enter value', 'danger');
        }else if(name && isEditing) {
          // show edit
          setList(list.map(item => {
              if(item.id === editID){
                  return {...item, title: name}
              }
              return item
          }))
          setName('');
          setIsEditing(false);
          setEditID(null);
          showAlert(true, 'editted an item', 'success');
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
    const removeItems = () => {
        showAlert(true, 'List is empty', 'danger');
        setList([]);
    }
    const removeItem = (id) => {
         setList(list.filter(item => item.id !== id))
         showAlert(true, 'Item removed', 'danger');
    }
    const editItem = (id) => {
       let specialItem = list.find(item => item.id === id);
       showAlert(true, 'Edit item', 'success');
       setIsEditing(true);
       setEditID(id);
       setName(specialItem.title)
    }
    useEffect(() => {
        localStorage.setItem('list', JSON.stringify(list))
    },[list])
    return (
        <div>
          <form onSubmit={handleSubmit}>
              {alert.show && <Alert {...alert} removeAlert={showAlert} list={list}/>}
              <h2>Grocery Bud App</h2>
              <input type="text" placeholder="e.g. eggs" onChange={(e) => setName(e.target.value)} value={name}/>
              <button type="submit">{isEditing ? 'edit' : 'add'}</button>
          </form>
          {list.length > 0 && (
             <div>
              <List items={list} removeItem={removeItem} editItem={editItem}/>
              <button onClick={removeItems}>Clear all</button>
             </div>
          )}
        </div>
    )
}


export default App 