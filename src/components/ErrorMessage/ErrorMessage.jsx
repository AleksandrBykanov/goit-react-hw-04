import css from "../ErrorMessage/ErrorMessage.module.css"

const ErrorMessage = () => {
  return (
    <p className={css.message}>Nothing found for your request</p>
  )
}

export default ErrorMessage