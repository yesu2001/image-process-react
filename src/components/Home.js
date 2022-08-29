import {useState,useEffect} from 'react';
import Login from './Login'
import Dashboard from './Dashboard'

const Home = () => {
	const [openModal,setOpenModal] = useState(false);
	const [newName,setNewName] = useState('');
	const [newEmail,setNewEmail] = useState('');
	const [newPhone,setNewPhone] = useState('');
	const [newPassword,setNewPassword] = useState('');
	const [isLogged,setIsLogged] = useState(true);
	var username = localStorage.getItem('Name').replace(/"/g,"")


	const handleLogout = () => {
		setIsLogged(false)
	}

	return (
		<div className="home">
			{isLogged ? (<><div className="home_navbar">
				<h1>{username}</h1>
				<div>
					<button className="logout" onClick={handleLogout}>Logout</button>
				</div>
				
			</div><Dashboard/></>):(<Login/>)}
					
		</div>
	)
}


export default Home;