import { useState } from "react";
import UserContext from './UserContext';
import Listt from "./Listt";
// component function
function SimpleArrayOfObjectsComponent() {
    const [users, setUsers] = useState([]);
    const [inputTxt, setInputTxt] = useState('');
    const [listVisible, setListVisible] = useState(false);
    
    function handleInputChange(e) {
        setInputTxt(e.target.value);
        // console.log(e.)
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

    return (
        <UserContext.Provider value={{users, setUsers}}>
            <input 
              name="user"
              id="1"
              type='text'
              value={inputTxt}
              onChange={handleInputChange}
            />
            <button onClick={handleSave}>Zapisz</button>
 
           { listVisible && <Listt /> } 
         
        </UserContext.Provider>
    )
}
export default SimpleArrayOfObjectsComponent;
