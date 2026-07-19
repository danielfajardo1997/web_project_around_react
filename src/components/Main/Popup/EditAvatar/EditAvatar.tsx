import { useContext, useRef } from 'react';
import type { FormEvent } from 'react';
import CurrentUserContext from '../../../../contexts/CurrentUserContext';

export default function EditAvatar(): React.JSX.Element {
  const { handleUpdateAvatar } = useContext(CurrentUserContext);
  const avatarRef = useRef<HTMLInputElement>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    if (avatarRef.current) {
      handleUpdateAvatar({ avatar: avatarRef.current.value });
    }
  }

  return (
    <form
      className="popup__form"
      id="edit-avatar-form"
      name="avatarForm"
      onSubmit={handleSubmit}
    >
      <input
        className="popup__input popup__input_type_url"
        name="avatar"
        placeholder="Enlace a la imagen"
        required
        type="url"
        ref={avatarRef}
      />
      <span className="popup__error" />
      <button className="button popup__button" type="submit">
        Guardar
      </button>
    </form>
  );
}
