
import '../styles/Reset.css'
import '../styles/AdminOverseer.css'
//import candidates from '../data/candidates'

function GetUsersTable(props) {
    const usersWhoVoted = props.voted;
    const users = props.users;


    return users.map(function (user, index) {

        function removeUser() {
            users.splice(index, 1);
            props.setUsers(users);
            props.setPageNumber(index);
            
            console.log(usersWhoVoted[index]);
            if(usersWhoVoted[index] !== -1 && usersWhoVoted[index]) {
                props.candidates[usersWhoVoted[index]].votes--;
            }
            
        }

        if(user.type === 'admin') {
            return (
                <tr key={index} className='users-table-row'>
                    <td className='users-table-slot'></td>
                    <td className='users-table-slot'>{user.name}</td>
                    <td className='users-table-slot'>{user.email}</td>
                    <td className='users-table-slot'>
                        inapp.
                    </td>
                </tr>
            )
        }

        if(usersWhoVoted[user.id] !== -1) {
            return (
                <tr key={index} className='users-table-row'>
                    <td index={index} className='users-table-slot x-slot' onClick={removeUser}>X</td>
                    <td className='users-table-slot'>{user.name}</td>
                    <td className='users-table-slot'>{user.email}</td>
                    <td className='users-table-slot user-voted'>
                        {usersWhoVoted[user.id] !== -1 ? 'true' : 'false'}
                    </td>
                </tr>
            )
        }
        else {
            return (
                <tr key={index} className='users-table-row'>
                    <td index={index} className='users-table-slot x-slot' onClick={removeUser}>X</td>
                    <td className='users-table-slot'>{user.name}</td>
                    <td className='users-table-slot'>{user.email}</td>
                    <td className='users-table-slot user-didnt-vote'>
                        {usersWhoVoted[user.id] !== -1 ? 'true' : 'false'}
                    </td>
                </tr>
            )
        }

         
    });
}

function AdminOverseer(props) {
    const usersWhoVoted = props.voted;
    let numberOfVotes = 0;
    for(let i of props.users) {
        if(usersWhoVoted[i.id] !== -1) ++numberOfVotes;
    }

    return (
        <div className='AdminOverseer-outer-container'>
            <div className='AdminOverseer-inner-container'>
                <h2 id="AdminOverseer-title">Voting Statistics</h2>
                <h4 id="total-votes">{numberOfVotes}</h4>
                <table className='users-table'>
                    <tr className='users-table-row'>
                        <td className='users-table-slot'></td>
                        <td className='users-table-slot'>Name</td>
                        <td className='users-table-slot'>Email</td>
                        <td className='users-table-slot'>Did vote</td>
                    </tr>
                    <GetUsersTable
                        voted={props.voted}
                        users={props.users}
                        setUsers={props.setUsers}
                        setPageNumber={props.setPageNumber}
                        candidates={props.candidates}
                    />
                </table>
                <button>Go to Voting Statistics</button>
            </div>
        </div>
    )
}


export default AdminOverseer;