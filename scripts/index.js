const editElement = document.querySelector('.popup');
const editProfileButtonElement = document.querySelector('.profile__edit-button');
const editCloseButtonElement = editElement.querySelector('.popup__close');
const formElement = document.querySelector('.profile__profile-info');
const nameInput = formElement.querySelector('.profile__name');
const jobInput = formElement.querySelector('.profile__status');
const editProName = editElement.querySelector('.popup__proname');
const editProJob = editElement.querySelector('.popup__projob');
const formElementSubmit = editElement.querySelector('.popup__submit');

//открытие окна
const editOn = function () {
  editProName.value = nameInput.textContent;
  editProJob.value = jobInput.textContent;
  editElement.classList.add('popup_opened');
};
// закрытие окна
const editOff = function () { editElement.classList.remove('popup_opened'); };

function handleFormSubmit(evt) {
  evt.preventDefault();
  nameInput.textContent = editProName.value;
  jobInput.textContent = editProJob.value;
  editOff();
}

editProfileButtonElement.addEventListener('click', editOn);
editCloseButtonElement.addEventListener('click', editOff);

// отправка формы
formElementSubmit.addEventListener('click', handleFormSubmit);

