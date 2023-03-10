import { useState } from 'react';
import { Link } from 'react-router-dom';
import { signUp, profileUpdate} from '../firebase';

function SignUp(props){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [displayName, setDisplayName] = useState("");

    //submit
    const handleSignup = async (event) => {
      event.preventDefault();
      try {
        await signUp(email, password);
        await profileUpdate(displayName);
        // console.log("User signed up successfully");
      } catch (error) {
        console.error(error);
      }
    };
    
    //on change
    const handleNameChange = (event) => {
      console.log(event.target.value); 
      setDisplayName(event.target.value);
    };

    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    };

    return (
    <>
    <h1>Sign Up Page</h1>
    <form onSubmit={handleSignup}>
        <label>
             Display Name: <input type="text" name="displayName" value={displayName} onChange={handleNameChange} required/>
        </label><br/><br/>
        <label>
             Email: <input type="email" name="email" value={email} onChange={handleEmailChange} required/>
        </label><br/><br/>
        <label>
            Password: <input type="password" name="password" value={password} onChange={handlePasswordChange} required/>
        </label><br/><br/>
        <Link to="/signin">Sign in instead</Link>
        <input id="SignupBtn" type="submit" value="Sign Up"/>
    </form>
    </>
    )
};

export default SignUp;