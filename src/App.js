
import React,{useState} from 'react';

import Login from './components/Login'
import Voting from './components/Voting'
import AdminOverseer from './components/AdminOverseer'

import users from './data/users'
import candidates from './data/candidates'


const usersWhoVoted = [];
for(let i of users) {
  usersWhoVoted[i.id] = -1;
}

function App() {

  const [pageState, setPageState] = useState(0);
  const [currentUser, setCurrentUser] = useState(null);
  const [usersArray, setUsersArray] = useState(users);
  const [pageNumber, setPageNumber] = useState(0);
  
  console.log(pageNumber)

  switch(pageState) {
    case 0: //login page
      return (
        <Login
          setCurrentUser={setCurrentUser}
          setPageState={setPageState}
          usersWhoVoted={usersWhoVoted}
        />
      );
    case 1://user voting page
      return (
        <Voting
          candidates={candidates}
          currentUser={currentUser}
          setPageState={setPageState}
          usersWhoVoted={usersWhoVoted}
        />
      )
    case 2: //admin - users page
      return (
        <AdminOverseer
          voted={usersWhoVoted}
          users={usersArray}
          setUsers={setUsersArray}
          setPageNumber={setPageNumber}
          candidates={candidates}
        />  
      )
    default: return(
      <div>pageNumber</div>
    )
  }
}

export default App;


