import '../styles/Reset.css'
import '../styles/LoginInput.css'



function LoginInput(props) {
    return (
        <div className="LoginInput">
            <p>{props.text}</p>
            <input id={props.type} type="text"/>
        </div>
    )
}

export default LoginInput;
