import { useState, createContext, useContext } from "react";

import UserContext from './UserContext'
// const UserContext = createContext();

function Component1() {
  const [user, setUser] = useState("Olapp");

  return (
    <UserContext.Provider value={user}>
      <h1>Hello {user}!</h1>
      <Component2 />
    </UserContext.Provider>
  );
}

function Component2() {
    return (
        <>
        <h3>Component2</h3>
        <p>Props:not used here</p>
        <br></br>
        <Component3/>
        </>
    )
}

function Component3() {
    const userw = useContext(UserContext);
    return (
        <>
        <h3>Component3</h3>
        <p>Props: {userw}</p>
        </>
    )
}













// function Component2({ user }) {
//   return (
//     <>
//       <h1>Component 2</h1>
//       <Component3 user={user} />
//     </>
//   );
// }

// function Component3({ user }) {
//   return (
//     <>
//       <h1>Component 3</h1>
//       <Component4 user={user} />
//     </>
//   );
// }

// function Component4({ user }) {
//   return (
//     <>
//       <h1>Component 4</h1>
//       <Component5 user={user} />
//     </>
//   );
// }

// function Component5({ user }) {
//   return (
//     <>
//       <h1>Component 5</h1>
//       <h2>{`Hello ${user} again!`}</h2>
//     </>
//   );
// }

export default Component1;