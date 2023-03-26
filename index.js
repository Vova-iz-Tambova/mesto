const editElement = document.querySelector('.edit');
const editProfileButtonElement = document.querySelector('.profile__edit-button');
const editCloseButtonElement = editElement.querySelector('.edit__close');

const editOn = function () {
  editElement.classList.add('edit_active');
};

const editOff = function () {
  editElement.classList.remove('edit_active');
};

editProfileButtonElement.addEventListener('click', editOn)
editCloseButtonElement.addEventListener('click', editOff)