import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = (images) => {
  console.log(images);
  
  return (
    <ul>
      {Array.isArray(images) && images.map((image)=>(
      <li key={image.id}>
        <ImageCard src={image.urls.small} alt={image.alt_description} />
      </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
