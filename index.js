const editElement = document.querySelector('.edit');
const editProfileButtonElement = document.querySelector('.profile__edit-button');
const editCloseButtonElement = editElement.querySelector('.edit__close');
const formElement = document.querySelector('.profile__profile-info');
const nameInput = formElement.querySelector('.profile__name');
const jobInput = formElement.querySelector('.profile__status');

const editOn = function () {editElement.classList.add('edit_active');};
const editOff = function () {editElement.classList.remove('edit_active');};
editProfileButtonElement.addEventListener('click', editOn);
editCloseButtonElement.addEventListener('click', editOff);

const editProName = editElement.querySelector('.proName');
const editProJob = editElement.querySelector('.proJob');
editProName.value = nameInput.textContent;
editProJob.value = jobInput.textContent;

const formElementSubmit = editElement.querySelector('.edit__submit');

function handleFormSubmit (evt) {
  evt.preventDefault();
  nameInput.textContent = editProName;
  editOff;
}

formElementSubmit.addEventListener('click', handleFormSubmit);
console.log(nameInput, jobInput, formElementSubmit);