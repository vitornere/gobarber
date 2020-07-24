import { ValidationError } from 'yup';

interface ValidationErrorsResponse {
  [key: string]: string;
}

export default function getValidationErrors(
  err: ValidationError,
): ValidationErrorsResponse {
  const validationErrors: ValidationErrorsResponse = {};

  err.inner.forEach(error => {
    validationErrors[error.path] = error.message;
  });

  return validationErrors;
}
