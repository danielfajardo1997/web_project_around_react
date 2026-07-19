import { useContext } from 'react';
import type { CardData } from '../../../types/types';
import CurrentUserContext from '../../../contexts/CurrentUserContext';

type CardProps = {
  card: CardData;
  onCardClick: (card: CardData) => void;
  onCardLike: (card: CardData) => void;
  onCardDelete: (card: CardData) => void;
};

export default function Card(props: CardProps): React.JSX.Element {
  const { card, onCardClick, onCardLike, onCardDelete } = props;
  const { name, link, isLiked, owner } = card;
  const { currentUser } = useContext(CurrentUserContext);

  const isOwn = currentUser?._id === owner;

  const cardLikeButtonClassName = `card__like-button ${
    isLiked ? 'card__like-button_is-active' : ''
  }`;

  function handleCardClick(): void {
    onCardClick(card);
  }

  function handleLikeClick(): void {
    onCardLike(card);
  }

  function handleDeleteClick(): void {
    onCardDelete(card);
  }

  return (
    <li className="card">
      <img
        className="card__image"
        src={link}
        alt={name}
        onClick={handleCardClick}
      />
      {isOwn && (
        <button
          aria-label="Eliminar tarjeta"
          className="card__delete-button"
          type="button"
          onClick={handleDeleteClick}
        />
      )}
      <div className="card__description">
        <h2 className="card__title">{name}</h2>
        <button
          aria-label="Botón Me gusta"
          type="button"
          className={cardLikeButtonClassName}
          onClick={handleLikeClick}
        />
      </div>
    </li>
  );
}
