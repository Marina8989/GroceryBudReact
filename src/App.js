import React, {useState, useEffect} from 'react';
import List from './List';
import Alert from './Alert';

const getLocalStorage = () => {
    let list = localStorage.getItem('list');
    if(list) {
      return JSON.parse(localStorage.getItem('list'))
    }else {
        return []
    }
}

function App() {
    const [name, setName] = useState('');
    const [list, setList] = useState(getLocalStorage());
    const [isEditing, setIsEditing] = useState(false);
    const [editID, setEditID] = useState(null);
    const [alert, setAlert] = useState({show:false, msg: '', type: ''});

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!name) {
          showAlert(true, 'Please enter text', 'danger');
        }else if(name && isEditing) {
            setList(list.map(item => {
                if(item.id === editID) {
                   return {...item, title: name}
                }
                return item;
            }))
            setIsEditing(false);
            setEditID(null);
            setName('');
            showAlert(true, 'edited item', 'success');
        }else {
            showAlert(true, 'Item added to the list', 'success');
            const newItem = {id: new Date().getTime().toString(), title: name};
            setList([...list, newItem]);
            setName('');
        }
    }

    const showAlert = (show=false, msg='', type='') => {
        setAlert({show,msg,type});
    }

    const clearList = () => {
        showAlert(true, 'empty list', 'danger');
        setList([]);
    }
    const removeItem = (id) => {
        showAlert(true, 'item deleted', 'danger')
        setList(list.filter(item => item.id !== id));
    }
    const editItem = (id) => {
       const specificItem = list.find(item => item.id === id);
       setIsEditing(true);
       setEditID(id);
       setName(specificItem.title);
    }

    useEffect(() => {
       localStorage.setItem('list', JSON.stringify(list))
    }, [list])

    return (
        <div>
            <form onSubmit={handleSubmit}>
              {alert.show ? <Alert {...alert} removeAlert={showAlert}/> : null}
                <h3>Grocery Bud</h3>
                <input type="text"  placeholder="e.g. eggs" value={name} onChange={(e) => setName(e.target.value)}/>
                <button type="submit">{isEditing ? 'edit' : 'submit'}</button>
            </form>
            {list.length > 0 && (
                <div>
                <List items={list}  removeItem={removeItem} editItem={editItem}/>
                <button onClick={clearList}>Clear Items</button>
                </div>
            )}
            
        </div>
    )
}


export default App 