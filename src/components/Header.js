import logoMesto from "../images/logo.svg";
function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={logoMesto} alt="логотип Mesto" />
    </header>
  );
}

export default Header;
