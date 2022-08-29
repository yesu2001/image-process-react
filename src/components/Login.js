import {useState,useEffect} from 'react';
import Home from './Home'

const Login = () => {
	const [email,setEmail] = useState('');
	const [pass,setPass] = useState('');
	const [home, setHome] = useState(true);

	const handleSubmit = (e) => {
		e.preventDefault();
		var emailId = localStorage.getItem('Email').replace(/"/g,"");
		var password = localStorage.getItem('Password').replace(/"/g,"");

		if(!email || !pass) {
			alert('fill all the fields')
		}else if(pass !== password || email !== emailId) {
			alert('emailid or password is wrong')
		}else {
			setHome(!home);
		}

	}

	return(
		<div className="Login">
			{home ? (
					<form onSubmit={handleSubmit}>
						<h1>Login</h1>
						<input type='email' autocomplete="off" value={email} onChange={e=>setEmail(e.target.value)} placeholder='enter your email'/>
						<input type='password' autocomplete="off" value={pass} onChange={e=>setPass(e.target.value)} placeholder='enter your password'/>
						<input type='submit' value='Login'/>
					</form>
			):(<Home/>)}
		</div>
	)
}


export default Login;