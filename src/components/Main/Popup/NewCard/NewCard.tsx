export default function NewCard(): React.JSX.Element {
  return (
    <form className="popup__form" id="new-card-form" name="placeForm">
      <input
        className="popup__input popup__input_type_card-name"
        name="place-name"
        placeholder="Título"
        required
        type="text"
        minLength={2}
        maxLength={30}
      />
      <span className="popup__error" />

      <input
        className="popup__input popup__input_type_url"
        name="link"
        placeholder="Enlace a la imagen"
        required
        type="url"
      />
      <span className="popup__error" />

      <button className="button popup__button" type="submit">
        Crear
      </button>
    </form>
  );
}
