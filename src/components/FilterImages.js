import ImageFilter from 'react-image-filter';
import SelectedImage from './SelectedImage';
import {useState} from 'react';

const FilterImages = ({image}) => {
	const [imgSelected,setImgSelected] = useState([]);
	const filterData = [
		{
			id:'1',
			filter: "duotone",
			colorOne: [40, 250, 250],
			colorTwo: [250, 150, 30]
		},
		{
			id:'2',
			filter: "invert",
			colorOne: [40, 250, 250],
			colorTwo: [250, 150, 30]
		},
		{
			id:'3',
			filter: "grayscale",
			colorOne: [40, 250, 250],
			colorTwo: [250, 150, 30]
		},
		{
			id:'4',
			filter: "sepia",
			colorOne: [40, 250, 250],
			colorTwo: [250, 150, 30]
		},

	]

	const handleSelect = (id) => {
		var item = filterData.filter(i => i.id == id)
		setImgSelected(item)
	}

	return (
		<div className="imagefilters">
			<SelectedImage pic={image} image={imgSelected}/>
			{
				filterData.map(filter => <ImageFilter key={filter.id} className='imagefilter'
					image={image}
					filter={filter.filter}
					colorOne={filter.colorOne}
					colorTwo={filter.colorTwo} onClick={() => handleSelect(filter.id)}/>)
			}
		</div>
	)
}

export default FilterImages;