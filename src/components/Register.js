import { useState } from "react";
import { auth } from "../utils/auth";
import InfoTooltip from "./InfoTooltip";
import { useHistory } from "react-router-dom";

export default function Register() {
  const history = useHistory();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [isTooltip, setIsTooltip] = useState({
    isOpen: false,
    isSuccess: false,
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setUserData({
      ...userData,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    auth
      .signUp(userData.email, userData.password)
      .then(() => {
        setIsTooltip({
          ...isTooltip,
          isOpen: true,
          isSuccess: true,
        });
      })
      .catch((err) => {
        console.log(err);
        setIsTooltip({
          ...isTooltip,
          isOpen: true,
          isSuccess: false,
        });
      });
  }

  function handleCloseTooltip() {
    setIsTooltip({
      ...isTooltip,
      isOpen: false,
    });
    if (isTooltip.isSuccess) {
      history.push("/sign-in");
    }
  }

  return (
    <>
      <main className="auth">
        <h2 className="form__title-auth">Регистрация</h2>
        <form className="form" name="login" onSubmit={handleSubmit}>
          <fieldset className="form__container">
            <input
              value={userData.email}
              onChange={handleChange}
              id="email"
              name="email"
              type="email"
              className="form__item form__item_type_auth"
              placeholder="Email"
              required
            />
            <span className="email-input-error form__item-error"></span>
            <input
              value={userData.password}
              onChange={handleChange}
              id="password"
              name="password"
              type="password"
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
      <InfoTooltip
        isOpen={isTooltip.isOpen}
        onClose={handleCloseTooltip}
        isSuccess={isTooltip.isSuccess}
      />
    </>
  );
}
