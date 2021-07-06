import React, {useState, useEffect} from 'react';
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
        if(!name) {
          showAlert(true, 'Please enter text', 'danger');
        }else if(name && isEditing) {
            //deal with edit
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
        setList(list.filter(item => item.id != id));
    }

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
                <List items={list}  removeItem={removeItem}/>
                <button onClick={clearList}>Clear Items</button>
                </div>
            )}
            
        </div>
    )
}


export default App 