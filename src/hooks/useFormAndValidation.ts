import { useCallback, useState } from 'react';
import type { ChangeEvent } from 'react';

type FormValues = Record<string, string>;
type FormErrors = Record<string, string>;

export function useFormAndValidation(
  initialValues: FormValues = {},
  initialIsValid = false,
) {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isValid, setIsValid] = useState(initialIsValid);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const { name, value, validationMessage, form } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: validationMessage }));
    setIsValid(form ? form.checkValidity() : event.target.validity.valid);
  };

  const resetForm = useCallback(
    (
      newValues: FormValues = {},
      newErrors: FormErrors = {},
      newIsValid = false,
    ): void => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [],
  );

  return { values, handleChange, errors, isValid, resetForm };
}
