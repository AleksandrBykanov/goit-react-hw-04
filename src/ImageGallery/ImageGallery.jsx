import ImageCard from "../ImageCard/ImageCard";
import css from "../ImageGallery/ImageGallery.module.css"

const ImageGallery = ({images, openModal, modalData}) => {
  return (
    <ul className={css.ul}>
      {Array.isArray(images) && images.map((image)=>(
      <li className={css.li} key={image.id} onClick={openModal}>
        <ImageCard regular={image.urls.regular} src={image.urls.small} alt={image.alt_description} modalData={modalData} />
      </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
