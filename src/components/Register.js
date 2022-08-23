import { useState } from "react";

export default function Register() {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    if (!userData.email || !userData.password) {
      return;
    }
  }

  return (
    <main className="auth">
      <h2 className="form__title-auth">Регистрация</h2>
      <form className="form" name="login">
        <fieldset className="form__container">
          <input
            value={userData.email}
            id="email-input"
            name="email"
            type="email"
            className="form__item form__item_type_auth"
            placeholder="Email"
            required
          />
          <span className="email-input-error form__item-error"></span>
          <input
            value={userData.password}
            id="metier-input"
            name="description"
            type="text"
            className="form__item form__item_type_auth"
            placeholder="Пароль"
            required
          />
          <span className="password-input-error form__item-error"></span>
        </fieldset>
        <button type="submit" className="form__submit_type_auth">
          Зарегистрироваться
        </button>
        <div className="form__link-container">
          <a className="form__link" href="/sing-in">
            Уже зарегистрированы? Войти
          </a>
        </div>
      </form>
    </main>
  );
}
