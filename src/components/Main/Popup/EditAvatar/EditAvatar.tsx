export default function EditAvatar(): React.JSX.Element {
  return (
    <form className="popup__form" id="edit-avatar-form" name="avatarForm">
      <input
        className="popup__input popup__input_type_url"
        name="avatar"
        placeholder="Enlace a la imagen"
        required
        type="url"
      />
      <span className="popup__error" />
      <button className="button popup__button" type="submit">
        Guardar
      </button>
    </form>
  );
}
