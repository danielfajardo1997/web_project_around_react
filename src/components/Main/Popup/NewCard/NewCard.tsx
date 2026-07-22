import { useContext } from 'react';
import type { FormEvent } from 'react';
import CurrentUserContext from '../../../../contexts/CurrentUserContext';
import { useFormAndValidation } from '../../../../hooks/useFormAndValidation';

export default function NewCard(): React.JSX.Element {
  const { handleAddPlaceSubmit } = useContext(CurrentUserContext);
  const { values, handleChange, errors, isValid } = useFormAndValidation();

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    handleAddPlaceSubmit({ name: values['place-name'], link: values.link });
  }

  return (
    <form
      className="popup__form"
      id="new-card-form"
      name="placeForm"
      noValidate
      onSubmit={handleSubmit}
    >
      <input
        className={`popup__input popup__input_type_card-name ${
          errors['place-name'] ? 'popup__input_type_error' : ''
        }`}
        name="place-name"
        placeholder="Título"
        required
        type="text"
        minLength={2}
        maxLength={30}
        value={values['place-name'] || ''}
        onChange={handleChange}
      />
      <span
        className={`popup__error ${
          errors['place-name'] ? 'popup__error_visible' : ''
        }`}
      >
        {errors['place-name']}
      </span>

      <input
        className={`popup__input popup__input_type_url ${
          errors.link ? 'popup__input_type_error' : ''
        }`}
        name="link"
        placeholder="Enlace a la imagen"
        required
        type="url"
        value={values.link || ''}
        onChange={handleChange}
      />
      <span
        className={`popup__error ${errors.link ? 'popup__error_visible' : ''}`}
      >
        {errors.link}
      </span>

      <button
        className={`button popup__button ${
          !isValid ? 'popup__button_disabled' : ''
        }`}
        type="submit"
        disabled={!isValid}
      >
        Crear
      </button>
    </form>
  );
}
