import React from 'react';
import { useState, useContext } from "react";
import UserContext from './UserContext';

const Elementt = ({...user}) => {
    const {users, setUsers} = useContext(UserContext);

    const [editedUser, setEditedUser] = useState({});
    const [inputTxtE, setInputTxtE] = useState('');
    const [isEdited, setIsEdited] = useState(false);

    function handleEditUser(user) {
        setEditedUser(user);
        setInputTxtE(user.name)
        setIsEdited(true)
    }
    function handleInputChangeE(e) {
        setInputTxtE(e.target.value);
        // console.log(editedUser)
    }
    function handleSaveEdit() {
      const updatedUser = {...editedUser, name: inputTxtE};
      const updatedUsers = users.map((user) => 
        user.id === editedUser.id ? updatedUser : user
      )
        // console.log(updatedUsers)
        setUsers(updatedUsers)
        setIsEdited(false)
    }
    function handleCloseEdition() {
        setIsEdited(false)
    }
    function handleDeleteUser(user) {
        const newUsers = users.filter((userItem) =>
        userItem.id!==user.id
        )
        setUsers(newUsers)
    }
    return ( 
        isEdited && user.id === editedUser.id ? 
            (
            <div>
            <input 
                name="useredit"
                id={user.id}
                type='text'
                value={inputTxtE}
                onChange={handleInputChangeE}
            />
            <button onClick={handleSaveEdit}>Zapisz edycje</button>
            <button onClick={handleCloseEdition}>Zamknij edycje</button>
            </div>
            ) 
            :  
            (
            <div>
            <p>{user.name}</p>
            <button onClick={()=>handleEditUser(user)}>Edytuj</button>
            <button onClick={()=>handleDeleteUser(user)}>Usuń</button>
            </div> )                
     );
}
 
export default Elementt;