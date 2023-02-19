
import '../styles/Reset.css'
import '../styles/VotingConclude.css'


function VotingConclude({candidates}) {
    let winner = candidates[0];
    for(let i of candidates) {
        if(winner.votes < i.votes) winner = i;
    }


    return (
        <div className='VotingConclude-outer-container'>
            <div className='VotingConclude-inner-container'>
                <h2>The winner is:</h2>
                <h3>{winner.name}</h3>
                <h4>Won {winner.votes} votes</h4>
            </div>
        </div>
    )
}

export default VotingConclude;