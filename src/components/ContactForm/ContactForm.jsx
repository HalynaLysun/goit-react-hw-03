import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";

export default function ContactForm({ init, valid }) {
  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };

  const nameFieldId = useId();
  const numberFieldId = useId();

  return (
    <Formik>
      initialValues={init}
      onSubmit={handleSubmit}
      validationSchema={valid}
      <Form>
        <div>
          <label htmlFor={nameFieldId}>Name</label>
          <Field type="text" name="name" id={nameFieldId}></Field>
          <ErrorMessage name="name" as="span" />
        </div>
        <div>
          <label htmlFor={numberFieldId}>Number</label>
          <Field type="text" name="number" id={numberFieldId}></Field>
          <ErrorMessage name="number" as="span" />
        </div>
      </Form>
    </Formik>
  );
}
