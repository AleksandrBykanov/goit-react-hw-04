import css from "../SearchBar/SearchBar.module.css";
import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";

const FeedbackSchema = Yup.object().shape({
  search: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("This field is required"),
});

const SearchBar = ({ onSubmit }) => {
  const handleSubmit = (values) => {
    onSubmit(values);
  };

  return (
    <Formik
      initialValues={{
        search: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.form}>
        <Field
          className={css.field}
          name="search"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <ErrorMessage className={css.error} name="search" component="span" />
        <button className={css.btn} type="submit">Search</button>
      </Form>
    </Formik>
  );
};

export default SearchBar;
