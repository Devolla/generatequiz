// import React and the useState hook
import { useState } from "react";
// component function
function SimpleArrayOfObjectsComponent() {
    const [users, setUsers] = useState([]);
    const [editedUser, setEditedUser] = useState({});
    const [inputTxt, setInputTxt] = useState('');
    const [inputTxtE, setInputTxtE] = useState('');
    const [listVisible, setListVisible] = useState(false);
    const [isEdited, setIsEdited] = useState(false);

    function handleInputChange(e) {
        setInputTxt(e.target.value);
        // console.log(editedUser)
    }
    function handleInputChangeE(e) {
        setInputTxtE(e.target.value);
        console.log(editedUser)
    }
    function handleSave() {
        setUsers([
            ...users, 
            {
            name: inputTxt,
            id: users.length + 1
            }
     ])
     setListVisible(true)
     console.log(users)
     setInputTxt('')
    }
    function handleEditUser(user) {
        setEditedUser(user);
        setInputTxtE(user.name)
        setIsEdited(true)
    }
    function handleSaveEdit() {
      const updatedUser = {...editedUser, name: inputTxtE};
      const updatedUsers = users.map((user) => 
        user.id === editedUser.id ? updatedUser : user
      )
        console.log(updatedUsers)
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
        <>
            <input 
              name="user"
              id="1"
              type='text'
              value={inputTxt}
              onChange={handleInputChange}
            />
            <button onClick={handleSave}>Zapisz</button>
 
            {listVisible ? (
                <div>
                 {users.map((user) =>
                 <div>
                    <p>{user.name}</p>
                    {isEdited && user.id === editedUser.id ? 
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
                    <button onClick={()=>handleEditUser(user)}>Edytuj</button>
                    <button onClick={()=>handleDeleteUser(user)}>Usuń</button>
                    </div>
                    ) }
                </div>
            )}
                </div>
            ) : 'Brak dodanych użytowników'}
        </>
    )
}
export default SimpleArrayOfObjectsComponent;
