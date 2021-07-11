import React from 'react';
import { FaEdit, FaTrash} from 'react-icons/fa';

const List = ({items}) => {
    return (
        <div>
           {items.map(item =>{
               const {id, title} = item;
               return (
                   <div key={id}>
                     <p>{title}</p>
                   </div>
               )
           })}
        </div>
    )
}

export default List