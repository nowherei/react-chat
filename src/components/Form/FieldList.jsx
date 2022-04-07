import { Field as FormikField } from 'formik';

import Field from '../Field';

import { formFields } from './constants';

const FieldList = ({ fields }) => {
  return fields.map((item, index) => {
    return (
      <FormikField key={index} {...formFields[item]}>
        {({ field, meta }) => {
          return (
            <>
              <Field {...formFields[item]} {...field} />
              {meta.touched && meta.error && (
                <div className="form__field-error">{meta.error}</div>
              )}
            </>
          );
        }}
      </FormikField>
    );
  });
};

export default FieldList;
