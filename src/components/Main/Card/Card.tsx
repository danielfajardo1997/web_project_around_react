import type { CardData } from '../../../types/types';

type CardProps = {
  card: CardData;
  onCardClick: (card: CardData) => void;
};

export default function Card(props: CardProps): React.JSX.Element {
  const { card, onCardClick } = props;
  const { name, link, isLiked } = card;

  function handleCardClick(): void {
    onCardClick(card);
  }

  return (
    <li className="card">
      <img
        className="card__image"
        src={link}
        alt={name}
        onClick={handleCardClick}
      />
      <button
        aria-label="Eliminar tarjeta"
        className="card__delete-button"
        type="button"
      />
      <div className="card__description">
        <h2 className="card__title">{name}</h2>
        <button
          aria-label="Botón Me gusta"
          type="button"
          className={`card__like-button ${
            isLiked ? 'card__like-button_is-active' : ''
          }`}
        />
      </div>
    </li>
  );
}
