const editElement = document.querySelector('.edit');
const editProfileButtonElement = document.querySelector('.profile__edit-button');
const editCloseButtonElement = editElement.querySelector('.edit__close');
const formElement = document.querySelector('.profile__profile-info');
const nameInput = formElement.querySelector('.profile__name');
const jobInput = formElement.querySelector('.profile__status');


//открытие окна
const editOn = function () {
editProName.value = nameInput.textContent;
editProJob.value = jobInput.textContent;
editElement.classList.add('edit_active');};
editProfileButtonElement.addEventListener('click', editOn);

// закрытие окна
const editOff = function () {editElement.classList.remove('edit_active');};
editCloseButtonElement.addEventListener('click', editOff);

const editProName = editElement.querySelector('.edit__proname');
const editProJob = editElement.querySelector('.edit__projob');


const formElementSubmit = editElement.querySelector('.edit__submit');

function handleFormSubmit (evt) {
  evt.preventDefault();
  nameInput.textContent = editProName.value;
  jobInput.textContent = editProJob.value;
  editOff();
}

// отправка формы
formElementSubmit.addEventListener('click', handleFormSubmit);

