import { Formik, Field } from 'formik';
import { Form, FormField, ErrorMessage } from './style';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';

const phoneSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      `Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan`
    )
    .required('Required'),

  number: Yup.number()   
    .required('Required'),
});

const initialValues = {
  name: '',
  number: '',
};

export const ContactForm = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={phoneSchema}
      onSubmit={(values, actions) => {
        onSubmit({ ...values, id: nanoid() });
        actions.resetForm();
      }}
    >
      <Form>
        <FormField>
          Name
          <Field name="name" />
          <ErrorMessage name="name" component="div" />
        </FormField>

        <FormField>
          Number
          <Field name="number" />
          <ErrorMessage name="number" component="div" />
        </FormField>

        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};
