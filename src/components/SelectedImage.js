import ImageFilter from 'react-image-filter';

const SelectedImage = ({image,pic}) => {
	return (
		<div className="SelectedImage">
			{
				image.map(i => <ImageFilter className="SelectedImage_img" image={pic} filter={i.filter} colorOne={i.colorOne} colorTwo={i.colorTwo}/>)
			}
		</div>
	)
}

export default SelectedImage