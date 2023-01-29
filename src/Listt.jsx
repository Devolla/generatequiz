import React from 'react';
import { useContext } from "react";
import Elementt from './Elementt';
import UserContext from './UserContext';

const Listt = () => {
   const {users} = useContext(UserContext);
   const userssList = users.map((user) => (
    <Elementt key={user.id} {...user}/>  //!!!!!!!!!!!!!!!!
   ))

    return userssList
}
 
export default Listt;