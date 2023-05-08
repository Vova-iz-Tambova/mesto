//попап редактирования профиля
const popupElement = document.querySelector('.edit-profile');
const popupProfileButtonElement = document.querySelector('.profile__edit-button');
const profileElement = document.querySelector('.profile__profile-info');
const nameVar = profileElement.querySelector('.profile__name');
const jobVar = profileElement.querySelector('.profile__status');
const popupProName = popupElement.querySelector('.popup__input_profile_name');
const popupProJob = popupElement.querySelector('.popup__input_profile_job');
const profileEditSubmit = popupElement.querySelector('.popup__form');

//попап добавления карточки
const newCardPopup = document.querySelector('.new-card');
const cardTemplate = document.querySelector('.card');
const cardGrid = document.querySelector('.elements');
const newCardButton = document.querySelector('.profile__add-button');
const newCardForm = newCardPopup.querySelector('.popup__form');
const nameInput = newCardForm.querySelector('.popup__input_mesto_name');
const linkInput = newCardForm.querySelector('.popup__input_mesto_link');

//попап открытия фотографии на весь экран
const fullScreenPhotoPopup = document.querySelector('.fullscreen');
const fullScreenPhotoData = fullScreenPhotoPopup.querySelector('.popup__fullscreen-photo');
const fullScreenTitleData = fullScreenPhotoPopup.querySelector('.popup__fullscreen-title');

//универскальные функции открытия и закрытия попапа
const closePopup = (popup) => { popup.classList.remove('popup_open'); };

const openPopup = (popup) => {
  popup.classList.add('popup_open');
  document.addEventListener('click', function (evt) {
    if ((evt.target.classList.contains('popup__close'))
      || (evt.target.classList.contains('popup_open'))) {
      closePopup(popup);
    }
  });
  document.addEventListener('keydown', function (evt) {
    if (evt.key === 'Escape') {
    closePopup (popup)}}
  )
};

//обработка событий открытия окна редактирования профиля
popupProfileButtonElement.addEventListener('click', () => {
  popupProName.value = nameVar.textContent;
  popupProJob.value = jobVar.textContent;
  openPopup(popupElement);
});
//обработка событий отправки данных редактирования профиля
profileEditSubmit.addEventListener('submit', function (event) {
  event.preventDefault();
  nameVar.textContent = popupProName.value;
  jobVar.textContent = popupProJob.value;
  closePopup(popupElement);
});

const createCardElement = (cardData) => {
  const cardElement = cardTemplate.content
    .querySelector('.elements__element')
    .cloneNode(true);

  const cardName = cardElement.querySelector('.elements__tag');
  const cardPhoto = cardElement.querySelector('.elements__photo');

  cardName.textContent = cardData.name;
  cardPhoto.src = cardData.link;
  cardPhoto.alt = cardData.name;

  const deleteCardButton = cardElement.querySelector('.elements__delete-button');
  const likeCardButton = cardElement.querySelector('.elements__like');

  const handleDelete = () => {
    cardElement.remove();
  };

  const handleLike = () => {
    likeCardButton.classList.toggle('elements__like_active');
  };

  const handlePhoto = () => {
    fullScreenPhotoData.src = cardPhoto.src;
    fullScreenPhotoData.alt = cardName.textContent;
    fullScreenTitleData.textContent = cardName.textContent;
    openPopup(fullScreenPhotoPopup);
  };

  deleteCardButton.addEventListener('click', handleDelete);
  likeCardButton.addEventListener('click', handleLike);
  cardPhoto.addEventListener('click', handlePhoto);

  return cardElement;
};

const addCardElement = (cardElement) => {
  cardGrid.prepend(cardElement);
};

initialCards.forEach((card) => {
  addCardElement(createCardElement(card));
});

newCardButton.addEventListener('click', () => { openPopup(newCardPopup); });

const handleNewCardSubmit = (event) => {
  event.preventDefault();

  const name = nameInput.value;
  const link = linkInput.value;

  const newCardData = {
    name, link
  };

  addCardElement(createCardElement(newCardData));
  closePopup(newCardPopup);
  newCardForm.reset();
};

newCardForm.addEventListener('submit', handleNewCardSubmit);