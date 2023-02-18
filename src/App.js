
import React,{useState} from 'react';

import Login from './components/Login'
import Voting from './components/Voting'
import AdminOverseer from './components/AdminOverseer'

import users from './data/users'
import candidates from './data/candidates'


const usersWhoVoted = [];
for(let i of users) {
  usersWhoVoted[i.id] = false;
}

function App() {

  const [pageState, setPageState] = useState(0);
  const [currentUser, setCurrentUser] = useState(null);
  //const [usersVoted, setUsersVoted] = useState([]);


  

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
          users={users}
        />  
      )
    default: return(
      <div></div>
    )
  }
}

export default App;


