const popupElement = document.querySelector('.popup');
const popupProfileButtonElement = document.querySelector('.profile__edit-button');
const popupCloseButtonElement = popupElement.querySelector('.popup__close');
const profileElement = document.querySelector('.profile__profile-info');
const nameVar = profileElement.querySelector('.profile__name');
const jobVar = profileElement.querySelector('.profile__status');
let popupProName = popupElement.querySelector('.popup__form_proname');
let popupProJob = popupElement.querySelector('.popup__form_projob');
const formElementSubmit = popupElement.querySelector('.popup__form');

//открытие окна
const showPopup = function () {
  popupProName.value = nameVar.textContent;
  popupProJob.value = jobVar.textContent;
  popupElement.classList.add('popup_opened');
};
// закрытие окна
const hidePopup = function () { popupElement.classList.remove('popup_opened'); };

function handleFormSubmit(event) {
  event.preventDefault();
  nameVar.textContent = popupProName.value;
  jobVar.textContent = popupProJob.value;
  hidePopup();
}

popupProfileButtonElement.addEventListener('click', showPopup);
popupCloseButtonElement.addEventListener('click', hidePopup);

// отправка формы
formElementSubmit.addEventListener('submit', handleFormSubmit);

