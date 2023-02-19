
import '../styles/Reset.css'
import '../styles/AdminStats.css'





function GetCandidatesStats({candidates, totalVotesDiv}) {
    return candidates.map(function(candidate, index) {
        return (
            <tr key={index} className='candidate-table-row'>
                <td className='candidate-table-slot'>{candidate.name}</td>
                <td className='candidate-table-slot'>{candidate.votes / totalVotesDiv}</td>
            </tr>
        )
    });
}

function AdminStats({candidates, setPageState}) {
    let totalVotes = candidates.reduce(function(acc, candidate) {
        return acc + candidate.votes
    }, 0)
    let totalVotesDiv;

    if(totalVotes === 0) totalVotesDiv = 1;
    else totalVotesDiv = totalVotes;


    function logout() {
        setPageState(0);//go back to login page
    }
    function gotoUserOverseer() {
        setPageState(2);
    }

    return (
        <div className='AdminStats-container'>
            <h3>Total votes: {totalVotes}</h3>
            <div className='AdminStats-candidate-table-container'>
            <table className='candidate-table'>
                <tr className='candidate-table-row'>
                    <td className='candidate-table-slot'>Name</td>
                    <td className='candidate-table-slot'>Perc. of Votes</td>
                </tr>
                
                <GetCandidatesStats
                    candidates={candidates}
                    totalVotesDiv={totalVotesDiv}
                />
                
            </table>
            </div>
            <div className='AdminStats-buttons-container'>
                <button onClick={gotoUserOverseer}>Go to User Overseeing Page</button>
                <button onClick={logout}>Logout</button>
            </div>
        </div>
    )
}


export default AdminStats;