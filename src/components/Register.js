import {useState,useEffect} from 'react';
import Login from './Login';

const Register = () => {
	const [name,setName] = useState('')
	const [email,setEmail] = useState('')
	const [phone,setPhone] = useState('')
	const [password,setpassword] = useState('')
	const [login,setLogin] = useState(true);

	const handleSubmit = (e) => {
		e.preventDefault();
		if(!name || !email || !password || !phone) {
			alert('fill all the details')
		}else {
			localStorage.setItem('Name',JSON.stringify(name));
			localStorage.setItem('Email',JSON.stringify(email));
			localStorage.setItem('Phone',JSON.stringify(phone));
			localStorage.setItem('Password',JSON.stringify(password));

			console.log('saved in local storage');
			setLogin(!login);
		}
	}


	const handleClick = () => {
		setLogin(!login);
	}

	return(
		<div className='Register'>
		{login ? (
			<form onSubmit={handleSubmit}>
				<h1> Register</h1>
				<input type='text' value={name} onChange={e=>setName(e.target.value)} placeholder='enter your name'/>
				<input type='email' placeholder='enter your email' value={email} onChange={e=>setEmail(e.target.value)}/>
				<input type='text' placeholder='enter your phone number' value={phone} onChange={e=>setPhone(e.target.value)}/>
				<input type='password' placeholder='enter your password' value={password} onChange={e=>setpassword(e.target.value)}/>
				<input type='submit' value='register'/>
				<p onClick={handleClick}>have an account? Login</p>
			</form>
			):(<Login/>)}
		</div>
	)
}


export default Register;