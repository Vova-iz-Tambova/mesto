const popupElement = document.querySelector('.popup');
const popupProfileButtonElement = document.querySelector('.profile__edit-button');
const popupCloseButtonElement = popupElement.querySelector('.popup__close');
const profileElement = document.querySelector('.profile__profile-info');
const nameVar = profileElement.querySelector('.profile__name');
const jobVar = profileElement.querySelector('.profile__status');
const popupProName = popupElement.querySelector('.popup__form_proname');
const popupProJob = popupElement.querySelector('.popup__form_projob');
const formElementSubmit = popupElement.querySelector('.popup__submit');

//открытие окна
const popupOn = function () {
  popupProName.value = nameVar.textContent;
  popupProJob.value = jobVar.textContent;
  popupElement.classList.add('popup_opened');
};
// закрытие окна
const popupOff = function () { popupElement.classList.remove('popup_opened'); };

function handleFormSubmit(evt) {
  evt.preventDefault();
  nameVar.textContent = popupProName.value;
  jobVar.textContent = popupProJob.value;
  popupOff();
}

popupProfileButtonElement.addEventListener('click', popupOn);
popupCloseButtonElement.addEventListener('click', popupOff);

// отправка формы
formElementSubmit.addEventListener('click', handleFormSubmit);

