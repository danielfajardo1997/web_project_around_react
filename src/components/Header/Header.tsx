import logo from '../../images/logo.svg';

export default function Header(): React.JSX.Element {
  return (
    <header className="header page__section">
      <img
        src={logo}
        alt="Logotipo Around the U.S."
        className="logo header__logo"
      />
    </header>
  );
}
