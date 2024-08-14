import css from "../ImageCard/ImageCard.module.css"

function ImageCard({src, alt, regular, onImageClick}) {
  
  
  return (
    <div className={css.cardWrapper} onClick={() => onImageClick(regular, alt)}>
      <img className={css.img} src={src} alt={alt} />
    </div>
  )
}

export default ImageCard