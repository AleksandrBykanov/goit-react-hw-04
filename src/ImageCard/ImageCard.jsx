import css from "../ImageCard/ImageCard.module.css"

function ImageCard({src, alt, regular, modalData}) {
  
  
  return (
    <div className={css.cardWrapper} onClick={() => modalData(regular, alt)}>
      <img className={css.img} src={src} alt={alt} />
    </div>
  )
}

export default ImageCard