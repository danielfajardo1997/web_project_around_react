export default function EditProfile(): React.JSX.Element {
  return (
    <form className="popup__form" id="edit-profile-form" name="profileForm">
      <input
        className="popup__input popup__input_type_name"
        name="name"
        placeholder="Nombre"
        type="text"
        required
        minLength={2}
        maxLength={40}
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
      />
      <span className="popup__error" />
      <button className="button popup__button" type="submit">
        Guardar
      </button>
    </form>
  );
}
