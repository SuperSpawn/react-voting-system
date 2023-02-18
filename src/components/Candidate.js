import '../styles/Reset.css'
import '../styles/Candidate.css'

function CandidateButton({selectedCandidate, clickOnCandidate}) {
    if(selectedCandidate === -1) {
        return (
            <button 
                className='Candidate-button'
                onClick={ clickOnCandidate }
            >
                Vote
            </button>
        )
    }
    else {
        return (
            <button className='Candidate-button-disabled'>
                Vote
            </button>
        )
    }
}

function Candidate({name, votes, setSelectedCandidate, index, selectedCandidate}) {

    function clickOnCandidate() {
        setSelectedCandidate(index);
        console.log(index);
    }

    return (
        <div className="Candidate">
            <h4>{name}</h4>
            <h5>{votes}</h5>
            <CandidateButton
                selectedCandidate={selectedCandidate}
                clickOnCandidate={clickOnCandidate}
            />
        </div>
    )
}


export default Candidate;



/*
<button className="Candidate-button" onClick={
                props.candidateVoteCallback(props.candidateIndex)
            }>
                Vote
            </button>

*/ 