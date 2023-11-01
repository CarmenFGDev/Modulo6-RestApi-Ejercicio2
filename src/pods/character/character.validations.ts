import { ValidationSchema, Validators } from '@lemoncode/fonk';
import { createFormikValidation } from '@lemoncode/fonk-formik';

const validationSchema: ValidationSchema = {
  field: {
    name: [Validators.required],
    species: [Validators.required],
    location: [Validators.required]
  },
};

export const formValidation = createFormikValidation(validationSchema);
