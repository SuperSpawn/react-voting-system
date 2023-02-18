
import '../styles/Reset.css'
import '../styles/AdminOverseer.css'
//import candidates from '../data/candidates'
import users from '../data/users'

function GetUsersTable(props) {
    const usersWhoVoted = props.voted;
    const users = props.users;


    return users.map(function (user) {

        if(usersWhoVoted[user.id] == true) {
            return (
                <tr className='users-table-row'>
                    <td className='users-table-slot x-slot'>X</td>
                    <td className='users-table-slot'>{user.name}</td>
                    <td className='users-table-slot'>{user.email}</td>
                    <td className='users-table-slot user-voted'>
                        {usersWhoVoted[user.id] == true ? 'true' : 'false'}
                    </td>
                </tr>
            )
        }
        else {
            return (
                <tr className='users-table-row'>
                    <td className='users-table-slot x-slot'>X</td>
                    <td className='users-table-slot'>{user.name}</td>
                    <td className='users-table-slot'>{user.email}</td>
                    <td className='users-table-slot user-didnt-vote'>
                        {usersWhoVoted[user.id] == true ? 'true' : 'false'}
                    </td>
                </tr>
            )
        }

         
    });
}

function AdminOverseer(props) {
    const usersWhoVoted = props.voted;
    let numberOfVotes = 0;
    for(let i of users) {
        if(usersWhoVoted[i.id] == true) ++numberOfVotes;
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
                    />
                </table>
                <button>Go to Voting Statistics</button>
            </div>
        </div>
    )
}


export default AdminOverseer;