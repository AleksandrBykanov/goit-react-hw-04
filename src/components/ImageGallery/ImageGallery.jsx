import ImageCard from "../ImageCard/ImageCard";
import css from "../ImageGallery/ImageGallery.module.css"

const ImageGallery = ({images, onImageClick}) => {
  return (
    <ul className={css.ul}>
      {Array.isArray(images) && images.map((image)=>(
      <li className={css.li} key={image.id}>
        <ImageCard regular={image.urls.regular} src={image.urls.small} alt={image.alt_description} onImageClick={onImageClick} />
      </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
