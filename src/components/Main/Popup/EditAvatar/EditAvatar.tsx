import { useContext } from 'react';
import type { FormEvent } from 'react';
import CurrentUserContext from '../../../../contexts/CurrentUserContext';
import { useFormAndValidation } from '../../../../hooks/useFormAndValidation';

export default function EditAvatar(): React.JSX.Element {
  const { handleUpdateAvatar } = useContext(CurrentUserContext);
  const { values, handleChange, errors, isValid } = useFormAndValidation();

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    handleUpdateAvatar({ avatar: values.avatar });
  }

  return (
    <form
      className="popup__form"
      id="edit-avatar-form"
      name="avatarForm"
      noValidate
      onSubmit={handleSubmit}
    >
      <input
        className={`popup__input popup__input_type_url ${
          errors.avatar ? 'popup__input_type_error' : ''
        }`}
        name="avatar"
        placeholder="Enlace a la imagen"
        required
        type="url"
        value={values.avatar || ''}
        onChange={handleChange}
      />
      <span
        className={`popup__error ${
          errors.avatar ? 'popup__error_visible' : ''
        }`}
      >
        {errors.avatar}
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
