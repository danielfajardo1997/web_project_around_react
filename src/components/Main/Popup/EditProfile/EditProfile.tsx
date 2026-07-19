import { useContext, useState } from 'react';
import type { FormEvent } from 'react';
import CurrentUserContext from '../../../../contexts/CurrentUserContext';

export default function EditProfile(): React.JSX.Element {
  const { currentUser, handleUpdateUser } = useContext(CurrentUserContext);

  const [name, setName] = useState(currentUser?.name || '');
  const [description, setDescription] = useState(currentUser?.about || '');

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    handleUpdateUser({ name, about: description });
  }

  return (
    <form
      className="popup__form"
      id="edit-profile-form"
      name="profileForm"
      onSubmit={handleSubmit}
    >
      <input
        className="popup__input popup__input_type_name"
        name="name"
        placeholder="Nombre"
        type="text"
        required
        minLength={2}
        maxLength={40}
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <span className="popup__error" />
      <input
        className="popup__input popup__input_type_description"
        name="description"
        placeholder="Acerca de mí"
        type="text"
        required
        minLength={2}
        maxLength={200}
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <span className="popup__error" />
      <button className="button popup__button" type="submit">
        Guardar
      </button>
    </form>
  );
}
