import css from "../LoadMoreBtn/LoadMoreBtn.module.css"

const LoadMoreBtn = ({loadMore}) => {
  return (
    <button className={css.loadBnt} onClick={loadMore}>Load more</button>
  )
}

export default LoadMoreBtn