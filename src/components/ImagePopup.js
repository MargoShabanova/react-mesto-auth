export default function ImagePopup(props) {
  return (
    <div className={`popup popup_type_open-card ${props.isOpen && 'popup_opened'}`}>
      <div className="popup__card-container popup__content">
        <button className="popup__close popup__close_image" type="button" onClick={props.onClose}></button>
        <img className="popup__image" src={props.card.link} alt={props.card.name} />
        <h2 className="popup__image-title">{props.card.name}</h2>
      </div>
    </div>
  )
}