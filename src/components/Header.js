import { NavLink, Route, Switch } from "react-router-dom";
import logoMesto from "../images/logo.svg";

function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={logoMesto} alt="логотип Mesto" />
      <Switch>
        <Route exact path="/">
          <nav className="header__nav-container">
            <p className="header__email">email@mail.com</p>
            <NavLink to="/sign-in" className="header__link-out">
              Выйти
            </NavLink>
          </nav>
        </Route>
        <Route path="/sign-up">
          <NavLink to="/sign-in" className="header__link">
            Войти
          </NavLink>
        </Route>
        <Route path="/sign-in">
          <NavLink to="/sign-up" className="header__link">
            Регистрация
          </NavLink>
        </Route>
      </Switch>
    </header>
  );
}

export default Header;