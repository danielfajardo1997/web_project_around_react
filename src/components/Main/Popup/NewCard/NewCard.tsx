import { useContext, useState } from 'react';
import type { FormEvent } from 'react';
import CurrentUserContext from '../../../../contexts/CurrentUserContext';

export default function NewCard(): React.JSX.Element {
  const { handleAddPlaceSubmit } = useContext(CurrentUserContext);

  const [name, setName] = useState('');
  const [link, setLink] = useState('');

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    handleAddPlaceSubmit({ name, link });
  }

  return (
    <form
      className="popup__form"
      id="new-card-form"
      name="placeForm"
      onSubmit={handleSubmit}
    >
      <input
        className="popup__input popup__input_type_card-name"
        name="place-name"
        placeholder="Título"
        required
        type="text"
        minLength={2}
        maxLength={30}
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <span className="popup__error" />

      <input
        className="popup__input popup__input_type_url"
        name="link"
        placeholder="Enlace a la imagen"
        required
        type="url"
        value={link}
        onChange={(event) => setLink(event.target.value)}
      />
      <span className="popup__error" />

      <button className="button popup__button" type="submit">
        Crear
      </button>
    </form>
  );
}
