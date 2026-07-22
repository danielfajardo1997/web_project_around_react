import { useContext } from 'react';
import type { FormEvent } from 'react';
import CurrentUserContext from '../../../../contexts/CurrentUserContext';
import { useFormAndValidation } from '../../../../hooks/useFormAndValidation';

export default function EditProfile(): React.JSX.Element {
  const { currentUser, handleUpdateUser } = useContext(CurrentUserContext);
  const { values, handleChange, errors, isValid } = useFormAndValidation(
    { name: currentUser?.name || '', description: currentUser?.about || '' },
    true,
  );

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    handleUpdateUser({ name: values.name, about: values.description });
  }

  return (
    <form
      className="popup__form"
      id="edit-profile-form"
      name="profileForm"
      noValidate
      onSubmit={handleSubmit}
    >
      <input
        className={`popup__input popup__input_type_name ${
          errors.name ? 'popup__input_type_error' : ''
        }`}
        name="name"
        placeholder="Nombre"
        type="text"
        required
        minLength={2}
        maxLength={40}
        value={values.name || ''}
        onChange={handleChange}
      />
      <span
        className={`popup__error ${errors.name ? 'popup__error_visible' : ''}`}
      >
        {errors.name}
      </span>
      <input
        className={`popup__input popup__input_type_description ${
          errors.description ? 'popup__input_type_error' : ''
        }`}
        name="description"
        placeholder="Acerca de mí"
        type="text"
        required
        minLength={2}
        maxLength={200}
        value={values.description || ''}
        onChange={handleChange}
      />
      <span
        className={`popup__error ${
          errors.description ? 'popup__error_visible' : ''
        }`}
      >
        {errors.description}
      </span>
      <button
        className={`button popup__button ${
          !isValid ? 'popup__button_disabled' : ''
        }`}
        type="submit"
        disabled={!isValid}
      >
        Guardar
      </button>
    </form>
  );
}
