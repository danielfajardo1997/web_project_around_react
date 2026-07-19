import { useContext } from 'react';
import type { PopupConfig, CardData } from '../../types/types';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import Card from './Card/Card';
import Popup from './Popup/Popup';
import NewCard from './Popup/NewCard/NewCard';
import EditProfile from './Popup/EditProfile/EditProfile';
import EditAvatar from './Popup/EditAvatar/EditAvatar';
import ImagePopup from './Popup/ImagePopup/ImagePopup';

type MainProps = {
  cards: CardData[];
  popup: PopupConfig | null;
  handleOpenPopup: (popup: PopupConfig) => void;
  handleClosePopup: () => void;
  handleCardLike: (card: CardData) => void;
  handleCardDelete: (card: CardData) => void;
};

export default function Main(props: MainProps): React.JSX.Element {
  const {
    cards,
    popup,
    handleOpenPopup,
    handleClosePopup,
    handleCardLike,
    handleCardDelete,
  } = props;
  const { currentUser } = useContext(CurrentUserContext);

  const editProfilePopup: PopupConfig = {
    title: 'Editar perfil',
    children: <EditProfile />,
  };

  const newCardPopup: PopupConfig = {
    title: 'Nuevo lugar',
    children: <NewCard />,
  };

  const editAvatarPopup: PopupConfig = {
    title: 'Cambiar foto de perfil',
    children: <EditAvatar />,
  };

  function handleCardClick(card: CardData): void {
    handleOpenPopup({
      children: <ImagePopup name={card.name} link={card.link} />,
    });
  }

  return (
    <main className="content">
      <section className="profile page__section">
        <img
          className="profile__image"
          src={currentUser?.avatar}
          alt={currentUser?.name}
          onClick={() => handleOpenPopup(editAvatarPopup)}
        />
        <div className="profile__info">
          <h1 className="profile__title">{currentUser?.name}</h1>
          <button
            aria-label="Editar perfil"
            className="profile__edit-button"
            type="button"
            onClick={() => handleOpenPopup(editProfilePopup)}
          />
          <p className="profile__description">{currentUser?.about}</p>
        </div>
        <button
          aria-label="Agregar tarjeta"
          className="profile__add-button"
          type="button"
          onClick={() => handleOpenPopup(newCardPopup)}
        />
      </section>
      <section className="cards page__section">
        <ul className="cards__list">
          {cards.map((card) => (
            <Card
              key={card._id}
              card={card}
              onCardClick={handleCardClick}
              onCardLike={handleCardLike}
              onCardDelete={handleCardDelete}
            />
          ))}
        </ul>
      </section>

      {popup && (
        <Popup
          onClose={handleClosePopup}
          title={popup.title}
          isOpen={popup !== null}
        >
          {popup.children}
        </Popup>
      )}
    </main>
  );
}
