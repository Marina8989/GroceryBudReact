import React from 'react';
import { FaEdit, FaTrash} from 'react-icons/fa';

const List = ({items, removeItem}) => {
    return (
        <div>
           {items.map(item =>{
               const {id, title} = item;
               return (
                   <div key={id}>
                     <p>{title}</p>
                     <button type="button"><FaEdit /></button>
                     <button type="button" onClick={() => removeItem(id)}><FaTrash /></button>
                   </div>
               )
           })}
        </div>
    )
}

export default List