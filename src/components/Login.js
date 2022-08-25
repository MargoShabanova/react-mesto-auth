import { useState } from "react";
import { useHistory } from "react-router-dom";
import { auth } from "../utils/auth";
import InfoTooltip from "./InfoTooltip";

export default function Login({ handleLogin }) {
  const history = useHistory();

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [isTooltipOpen, setIsTooltipOpen] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;

    setUserData({
      ...userData,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!userData.email || !userData.password) {
      return;
    }
    auth
      .signIn(userData.email, userData.password)
      .then((data) => {
        if (data.token) {
          localStorage.setItem("jwt", data.token);
          setUserData({
            email: "",
            password: "",
          });
          handleLogin();
          history.push("/main");
        }
      })
      .catch((err) => {
        console.log(err);
        setIsTooltipOpen(true);
      });
  }

  function handleCloseTooltip() {
    setIsTooltipOpen(false);
  }

  return (
    <>
      <main className="auth">
        <h2 className="form__title-auth">Вход</h2>
        <form className="form" name="login" onSubmit={handleSubmit}>
          <fieldset className="form__container">
            <input
              value={userData.email}
              onChange={handleChange}
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
              onChange={handleChange}
              id="password"
              name="password"
              type="password"
              className="form__item form__item_type_auth"
              placeholder="Пароль"
              required
            />
            <span className="password-input-error form__item-error"></span>
            <button type="submit" className="form__submit_type_auth">
              Войти
            </button>
          </fieldset>
        </form>
      </main>
      <InfoTooltip
        isOpen={isTooltipOpen}
        onClose={handleCloseTooltip}
        isSuccess={false}
      />
    </>
  );
}
