import css from "../ErrorMessage/ErrorMessage.module.css"

const ErrorMessage = ({error}) => {
  return (
    <p className={css.message}>{error}, Please try again later</p>
  )
}

export default ErrorMessage