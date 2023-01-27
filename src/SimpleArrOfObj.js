// import React and the useState hook
import { useState } from "react";

// component function
function SimpleArrayOfObjectsComponent() {
const [users, setUsers] = useState([{
    name: 'Ed',
    id: 1
}]);
const [currentUser, setCurrentUser] = useState({}); //
const [isEditing, setIsEditing] = useState(false);

function handleAdd() {
    setUsers([...users, {
        name: 'Ol',
        id: users.length + 1
    }])
}


//ponizej i handle Edit i handleInputChange zmieniaja stan currentUsera!!!!!!!!!!!!!
function handleEdit(user) {
    setIsEditing(true);
    // console.log(user, 'user')
    // console.log(copied, 'copied')
    setCurrentUser(user);
}

function handleInputChange(e) {
  setCurrentUser({...currentUser, name: e.target.value})  ///!!!!!!!!!!!!!!!!!!!!!!!!!!!!! przkaż obiekt zdestukyuryzowany i nadpisz obok własciwosc name
// console.log(currentUser)
}

function handleSubmit(e) {
    e.preventDefault();
      //jak skopiowac stan !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!  map i spr id current ze stanem i daj w iteracji zamiast starego - cały obiekt currUser
 const updateObject = users.map((user) => 
        user.id === currentUser.id ? currentUser : user
 )
    setUsers(updateObject);
    setIsEditing(false);
}


return (
    <>

    {isEditing && currentUser.id &&
    (<form onSubmit={handleSubmit}>
    <input 
    type='text'
    name='edit'
    value={currentUser.name}
    onChange={handleInputChange}
    />
    <button type="submit">Update</button>
    <button onClick={()=>setIsEditing(false)}>Cancel</button>
    </form>)
    }
    
    <ul>
        {users.map((user) => 
       
          <li key={user.id}>
            <p>{user.name}</p>
            {!isEditing && (  //!!!!!
                  <button onClick={()=>handleEdit(user)}>Edytuj</button> //@@@@
            )  //!!!
            }
          
          </li>
        )}
    </ul>
    <button onClick={handleAdd}>Dodaj usera</button>
  
    </>
)

}

 

export default SimpleArrayOfObjectsComponent;
