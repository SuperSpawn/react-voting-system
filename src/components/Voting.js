
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
        setPageState, currentUser, usersWhoVoted, candidates, users}
    ) {

    function reVote() {
        candidates[selectedCandidate].votes--;
        setSelectedCandidate(-1);//reset vote
    }
    function submitVote() {
        usersWhoVoted[currentUser.id] = selectedCandidate;
        let notDone = false;
        for(let i of users) {
            if(usersWhoVoted[i.id] === -1) {
                notDone = true;
            }
        }

        if(notDone === false) setPageState(4) //go to done page
        else    setPageState(0);//login screen
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



function Voting({candidates, currentUser, setPageState, usersWhoVoted, users}) {
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
                users={users}
            />   
        </div>
    )
}

export default Voting;

