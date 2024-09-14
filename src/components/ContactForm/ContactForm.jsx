import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import css from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";

export default function ContactForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    const newContact = { ...values, id: nanoid() };
    dispatch(addContact(newContact));
    // onAdd({
    //   id: nanoid(),
    //   name: values.username,
    //   number: values.number,
    // });
    actions.resetForm();
  };
  const UserSchema = Yup.object().shape({
    username: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
  });

  return (
    <Formik
      initialValues={{
        username: "",
        number: "",
        id: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={UserSchema}
    >
      <Form className={css.form}>
        <div className={css.formItem}>
          <label htmlFor="username">Name</label>
          <Field
            className={css.input}
            id="username"
            type="text"
            name="username"
          ></Field>
          <ErrorMessage
            className={css.error}
            name="username"
            component="span"
          />
        </div>
        <div className={css.formItem}>
          <label htmlFor="number">Number</label>
          <Field
            className={css.input}
            id="number"
            type="text"
            name="number"
          ></Field>
          <ErrorMessage className={css.error} name="number" component="span" />
        </div>
        <div>
          <button className={css.button} type="submit">
            Add contact
          </button>
        </div>
      </Form>
    </Formik>
  );
}
