import {useState} from 'react';
import './styles.css';
import FilterImages from './FilterImages';

const Dashboard = () => {
	const [imgFile,setImgFile] = useState('');
	const [gsValue,setGSValue] = useState(0);
	const [blurValue,setBlurValue] = useState(0)

	const handleChange = (e) => {
		setImgFile(URL.createObjectURL(e.target.files[0]));
	}

	return (
		<div className='Dashboard'>

			<div className='Dashboard_left'>
				<input type='file' className="input-file" onChange={handleChange}/>
			</div>
			<img className='Dashboard_img' src={imgFile} alt=''/>
			<div className='Dashboard_right'>
				<img src='' alt=''/>
			</div>
			<div className="filters">
				<FilterImages image={imgFile}/>
			</div>
		</div>
	)
}

export default Dashboard;