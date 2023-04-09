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

  handleDelete = () => {
    cardElement.remove();
  };

  handleLike = () => {
    likeCardButton.classList.toggle('elements__like_active');
  };

  deleteCardButton.addEventListener('click', handleDelete);
  likeCardButton.addEventListener('click', handleLike);

  return cardElement;
};

const addCardElement = (cardElement) => {
  cardGrid.prepend(cardElement);
};

initialCards.forEach((card) => {
  addCardElement(createCardElement(card));
});