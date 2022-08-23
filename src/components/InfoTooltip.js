import React from "react";
import imageSuccess from "../images/success.svg";
import imageError from "../images/error.svg";

export default function InfoTooltip({ isOpen, onClose, isSuccess }) {
  return (
    <div className={`popup popup_type_tooltip ${isOpen && "popup_opened"}`}>
      <div className="popup__container popup__container_type_tooltip">
        <button
          type="button"
          className="popup__close"
          onClick={onClose}
        ></button>
        <img
          className="popup__tooltip-image"
          src={isSuccess ? imageSuccess : imageError}
          alt={isSuccess ? "Успешно" : "Ошибка"}
        />
        <p className="popup__tooltip-message">
          {isSuccess
            ? "Вы успешно зарегистрировались!"
            : "Что-то пошло не так! Попробуйте ещё раз."}
        </p>
      </div>
    </div>
  );
}
