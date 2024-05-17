import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useId } from "react";

import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";

import css from "./ContactForm.module.css";

const regex = {
  phoneNumber: /^[0-9]{3}[-]{1}[0-9]{2}[-]{1}[0-9]{2}$/, 
};

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  phone: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .matches(regex.phoneNumber, "Number format: 000-00-00")
    .required("Required"),
});

export default function ContactForm() {
  const dispatch = useDispatch();

  const nameFieldId = useId();
  const phoneFieldId = useId();

  const initialValues = {
    name: "",
    phone: "",
  };

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values));
    actions.resetForm();
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={FeedbackSchema}
      >
        <Form className={css.container}>
          <div className={css.inputContainer}>
            <label className={css.inputContainer}htmlFor={nameFieldId}>Name</label>
            <Field className={css.inputValue} type="text" name="name" />
            <ErrorMessage className={css.error} name="name" component="span" />
          </div>
          <div className={css.inputContainer}>
            <label htmlFor={phoneFieldId}>Number</label>
            <Field className={css.inputValue} type="tel" name="phone" />
            <ErrorMessage className={css.error} name="phone" component="span" />
          </div>
          <button className={css.btnAdd} type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
    </>
  );
}
