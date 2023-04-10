const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const cardTemplate = document.querySelector('.card');
const cardGrid = document.querySelector('.elements');
const newCardPopup = document.querySelector('.addnewcard');
const newCardButton = document.querySelector('.profile__add-button');
const closeCardButton = document.querySelector('.addnewcard__close');
const newCardForm = document.querySelector('.addnewcard__form');
const nameInput = newCardForm.querySelector('.addnewcard__input_text_name');
const linkInput = newCardForm.querySelector('.addnewcard__input_text_link');
const fullScreenPhotoPopup = document.querySelector('.fullscreencard');
const closefullScreenPhotoPopup = document.querySelector('.fullscreencard__close');
const fullScreenPhotoData = fullScreenPhotoPopup.querySelector('.fullscreencard__photo_link');
const fullScreenTitleData = fullScreenPhotoPopup.querySelector('.fullscreencard__title_name');

const createCardElement = (cardData) => {
  const cardElement = cardTemplate.content
    .querySelector('.elements__element')
    .cloneNode(true);

  const cardName = cardElement.querySelector('.elements__tag');
  const cardPhoto = cardElement.querySelector('.elements__photo');

  cardName.textContent = cardData.name;
  cardPhoto.src = cardData.link;
  cardPhoto.alt = cardData.name;

  const deleteCardButton = cardElement.querySelector('.card__delete-button_type_delete');
  const likeCardButton = cardElement.querySelector('.elements__like_type_like');
  const showCardPhoto = cardElement.querySelector('.elements__photo');

  handleDelete = () => {
    cardElement.remove();
  };

  handleLike = () => {
    likeCardButton.classList.toggle('elements__like_active');
  };

  handlePhoto = () => {
    fullScreenPhotoData.src = showCardPhoto.src;
    fullScreenTitleData.textContent = cardName.textContent;
    fullScreenPhotoPopup.classList.add('fullscreencard_open');
  };

  closefullScreenPhotoPopup.addEventListener('click', () => {
    fullScreenPhotoPopup.classList.remove('fullscreencard_open');
  });

  deleteCardButton.addEventListener('click', handleDelete);
  likeCardButton.addEventListener('click', handleLike);
  showCardPhoto.addEventListener('click', handlePhoto);

  return cardElement;
};

const addCardElement = (cardElement) => {
  cardGrid.prepend(cardElement);
};

initialCards.forEach((card) => {
  addCardElement(createCardElement(card));
});

const openPopup = (newCardPopup) => {
  newCardPopup.classList.add('addnewcard_open');
};

const closePopup = (newCardPopup) => {
  newCardPopup.classList.remove('addnewcard_open');
};

newCardButton.addEventListener('click', () => {
  openPopup(newCardPopup);
});

closeCardButton.addEventListener('click', () => {
  closePopup(newCardPopup);
});

const handleNewCardSubmit = (event) => {
  event.preventDefault();

  let name = nameInput.value;
  let link = linkInput.value;

  const newCardData = {
    name, link
  };

  addCardElement(createCardElement(newCardData));
  closePopup(newCardPopup);
  newCardForm.reset();
};

newCardForm.addEventListener('submit', handleNewCardSubmit);