
//import '../styles/Reset.css'
import '../styles/Voting.css'

import React,{useState} from 'react';
import Candidate from './Candidate'


function GetCandidates({candidates, selectedCandidate, setSelectedCandidate}) {


    return (
        candidates.map(function(candidate, index) {
            return (
                <Candidate
                    key={index}
                    name={candidate.name}
                    votes={candidate.votes}
                    setSelectedCandidate={setSelectedCandidate}
                    index={index}
                    selectedCandidate={selectedCandidate}
                    candidates={candidates}
                />
            )
        })
    )
}

function GetPostVoteButtons(
    {selectedCandidate, setSelectedCandidate, 
        setPageState, currentUser, usersWhoVoted, candidates}
    ) {

    function reVote() {
        candidates[selectedCandidate].votes--;
        setSelectedCandidate(-1);//reset vote
    }
    function submitVote() {
        usersWhoVoted[currentUser.id] = true;
        setPageState(0);//login screen
    }


    if(selectedCandidate !== -1) {
        return (
            <div className='post-vote-buttons-container'>
                <button onClick={reVote}>
                    Pull Vote
                </button>
                <button onClick={submitVote}>
                    Submit Vote
                </button>
            </div>
        )
    }
    else {
        return (
            <div></div>
        )
    }
}



function Voting({candidates, currentUser, setPageState, usersWhoVoted}) {
    const [selectedCandidate, setSelectedCandidate] = useState(-1)
    return (
        <div className='Voting-container'>
            <GetCandidates
                candidates={candidates}
                selectedCandidate={selectedCandidate}
                setSelectedCandidate={setSelectedCandidate}
            />
            <GetPostVoteButtons
                selectedCandidate={selectedCandidate}
                setSelectedCandidate={setSelectedCandidate}
                setPageState={setPageState}
                currentUser={currentUser}
                usersWhoVoted={usersWhoVoted}
                candidates={candidates}
            />   
        </div>
    )
}

export default Voting;

