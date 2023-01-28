// import React and the useState hook
import { useState } from "react";

// component function
function SimpleArrayOfObjectsComponent() {

    // const [questionInput, setQuestionInput] = useState(question);
const [users, setUsers] = useState([{
    id: 0,
    name: "Joe",
}]);
const [currentUser, setCurrentUser] = useState({}); //
const [isEditing, setIsEditing] = useState(false);
const [inputTxt, setinputTxt] = useState(''); //

function handleAdd(e) {
    const nb = users.length === 0 ? 0 : users.length;

    setUsers([...users, {
        name: e.target.value,
        id: nb + 1
    }])
}

function handleInputTxt(e) {
    setinputTxt(e.target.value);
    console.log(inputTxt)
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
    <input 
    type='text'
    name='add'
    value={inputTxt}
    onChange={handleInputTxt}
    />
    <button onClick={handleAdd}>Dodaj usera</button>
  
    </>
)

}

 

export default SimpleArrayOfObjectsComponent;
