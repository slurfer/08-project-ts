import React from "react";
import NewUser from "./components/User/NewUser";
import UserList from "./components/User/UserList";
import UserInterface from "./types/UserInterface";
import { useState } from "react";

function App() {
  const [users, setUsers] = useState<UserInterface[]>([]);;

  const addUserHandler = (user: UserInterface) => {
    setUsers((prevUsers: UserInterface[]) => {
      return [user, ...prevUsers];
    });
  };

  const userListArea = users.length > 0 && <UserList users={users} />;
  return (
    <div className="App">
      <NewUser onNewUser={addUserHandler} />
      {userListArea}
    </div>
  );
}


export default App;
