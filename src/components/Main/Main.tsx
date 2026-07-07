import { useState } from 'react';
import type { PopupConfig, CardData } from '../../types/types';
import avatar from '../../images/avatar.jpg';
import Card from './Card/Card';
import Popup from './Popup/Popup';
import NewCard from './Popup/NewCard/NewCard';
import EditProfile from './Popup/EditProfile/EditProfile';
import EditAvatar from './Popup/EditAvatar/EditAvatar';
import ImagePopup from './Popup/ImagePopup/ImagePopup';

const cards: CardData[] = [
  {
    isLiked: false,
    _id: '5d1f0611d321eb4bdcd707dd',
    name: 'Valle de Yosemite',
    link: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg',
    owner: '5d1f0611d321eb4bdcd707dd',
    createdAt: '2019-07-05T08:10:57.741Z',
  },
  {
    isLiked: true,
    _id: '5d1f064ed321eb4bdcd707de',
    name: 'Lago Louise',
    link: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg',
    owner: '5d1f0611d321eb4bdcd707dd',
    createdAt: '2019-07-05T08:11:58.324Z',
  },
  {
    isLiked: false,
    _id: '5d1f0684d321eb4bdcd707df',
    name: 'Montañas Calvas',
    link: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg',
    owner: '5d1f0611d321eb4bdcd707dd',
    createdAt: '2019-07-05T08:12:52.219Z',
  },
  {
    isLiked: false,
    _id: '5d1f06afd321eb4bdcd707e0',
    name: 'Latemar',
    link: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg',
    owner: '5d1f0611d321eb4bdcd707dd',
    createdAt: '2019-07-05T08:13:35.451Z',
  },
  {
    isLiked: false,
    _id: '5d1f06dbd321eb4bdcd707e1',
    name: 'Parque Nacional de la Vanoise',
    link: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg',
    owner: '5d1f0611d321eb4bdcd707dd',
    createdAt: '2019-07-05T08:14:19.883Z',
  },
  {
    isLiked: false,
    _id: '5d1f0705d321eb4bdcd707e2',
    name: 'Lago di Braies',
    link: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg',
    owner: '5d1f0611d321eb4bdcd707dd',
    createdAt: '2019-07-05T08:15:01.128Z',
  },
];

console.log(cards);

export default function Main(): React.JSX.Element {
  const [popup, setPopup] = useState<PopupConfig | null>(null);

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

  function handleOpenPopup(popup: PopupConfig): void {
    setPopup(popup);
  }

  function handleClosePopup(): void {
    setPopup(null);
  }

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
          src={avatar}
          alt="Avatar"
          onClick={() => handleOpenPopup(editAvatarPopup)}
        />
        <div className="profile__info">
          <h1 className="profile__title">Jacques Cousteau</h1>
          <button
            aria-label="Editar perfil"
            className="profile__edit-button"
            type="button"
            onClick={() => handleOpenPopup(editProfilePopup)}
          />
          <p className="profile__description">Explorador</p>
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
            <Card key={card._id} card={card} onCardClick={handleCardClick} />
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
