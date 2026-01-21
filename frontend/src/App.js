import { useState, useTransition } from 'react';
import './App.css';

function App() {

  const [window, setWindow] = useState("home");

  return (
    <div className='mainDiv'>
      <header className="mainHeader">
        <h1>Welcome to Nantes's totally not a dodgy webiste</h1>
        <p>for reasons. this is a joke.</p>
      </header>
      {/* <button type="button" onclick={SignUpFrom()} class="mainButton">
        Sign Up
      </button>
      <button type="button" onclick={Login()} class="mainButton">
        Login
      </button> */}

      {window === "home" && (
        <>
      <button type="button" onClick={() => setWindow("signup")} class="mainButton">
        Sign Up
      </button>
      <button type="button" onClick={() => setWindow("login")} class="mainButton">
        Login
      </button>
        </>
      )}

      {window === "signup" && <SignUpForm />}
      {window === "login" && <LoginForm />}

    </div>
  );
}

function SignUpForm() {
  const [username, setUsername] = useState("");
  const [password, setPassowrd] = useState("");
  const [userEmail, setEmail] = useState("");

  return (
    <div className='form'>
      <h2>Sign Up</h2>
      <p>Fill in the form</p>

      <input 
        value={username} 
        className='homeInput'
        onChange={(e) => setUsername(e.target.value)}
        placeholder='Username'
      />

      <input 
        value={userEmail} 
        className='homeInput'
        onChange={(e) => setEmail(e.target.value)}
        placeholder='Email'
      />

      <input 
        value={password} 
        className='homeInput'
        onChange={(e) => setPassowrd(e.target.value)}
        placeholder='Password'
      />

      <input type="submit" className='mainButton' />

    </div>
  );
}

function LoginForm() {
  return (
    <div className='general'>
      <h2>Login</h2>
      <p>Login form goes here</p>
    </div>
  );
}


export default App;
