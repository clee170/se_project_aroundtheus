const initialCards = [
  {
    name: "Yosemitie Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg",
  },
];

const profileEditButton = document.querySelector("#profile-edit-button");
const profileEditmodal = document.querySelector("#profile-edit-modal");
const modalClose = profileEditmodal.querySelector("#modal-close");
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const profileTitleInput = document.querySelector("#profile-title-input");
const profileDescriptionInput = document.querySelector(
  "#profile-description-input"
);
const profileEditForm = profileEditmodal.querySelector(".modal__form");
const addCardModal = document.querySelector("#add-card-modal");
const cardModalClose = addCardModal.querySelector("#card-modal-close");
const profileAddButton = document.querySelector("#profile-add-button");
const addCardForm = addCardModal.querySelector(".modal__form");
const cardListEl = document.querySelector(".cards__list");
const cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;

const previewImageModal = document.querySelector("#preview-image-modal");
const previewImage = previewImageModal.querySelector(".modal__preview-image");
const previewImageModalClose = previewImageModal.querySelector("#preview-image-modal-close");
const previewCaption = document.querySelector("#preview_caption");

const cardTitleInput = addCardForm.querySelector(".modal__input-type-title");
const cardUrlInput = addCardForm.querySelector(".modal__input-type-url");

//something here in the above code breaks it

function closePopup() {
  profileEditmodal.classList.remove("modal_opened");
  addCardModal.classList.remove("modal_opened");
  previewImageModal.classList.remove("modal_opened");
}

function renderCard(cardData, wrapper) {
  const cardElement = getCardElement(cardData);
  wrapper.prepend(cardElement);
}
function handleAddCardFormSubmit(e) {
  e.preventDefault();
  const name = cardTitleInput.value;
  const link = cardUrlInput.value;
  renderCard({name, link}, cardListEl);
  closePopup(addCardModal);
}
function getCardElement(cardData) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImageEl = cardElement.querySelector(".card__image");
  const cardTitleEl = cardElement.querySelector(".card__title");
  const likeButton = cardElement.querySelector(".card__like-button");
  const deleteButton = cardElement.querySelector(".card__delete-button");
  deleteButton.addEventListener("click", () => {
    cardElement.remove();
  });
  cardElement.addEventListener("click", () => {
    previewImageModal.classList.add('modal_opened');
    previewCaption.textContent = cardData.name;
    previewImage.src = cardData.link;
    previewImage.alt = cardData.name;

  });
  // find delete button

  //add event listener to the delete button
    //cardElement.remove();


  //for card image. we have found card image above (cardImageEL)
    //add click listener to this
    //openModal with previewImageModal


  //something in the above code doesnt make sense to me. i need to either hop on a call or try
  //something new

  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle('card__like-button_active');
  });
  cardTitleEl.textContent = cardData.name;
  cardImageEl.alt = cardData.name;
  cardImageEl.src = cardData.link;
  return cardElement;
}

profileAddButton.addEventListener("click", () => {
  addCardModal.classList.add("modal_opened");
});

function handleProfileSubmit(e) {
  e.preventDefault();
  profileTitle.textContent = profileTitleInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  closePopup();

}

profileEditButton.addEventListener("click", () => {
  profileTitleInput.value = profileTitle.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
  profileEditmodal.classList.add("modal_opened");
});


modalClose.addEventListener("click", closePopup);
cardModalClose.addEventListener("click", closePopup);
previewImageModalClose.addEventListener("click", closePopup);

profileEditForm.addEventListener("submit", handleProfileSubmit);
addCardForm.addEventListener("submit", handleAddCardFormSubmit);

initialCards.forEach((cardData) =>  renderCard(cardData, cardListEl));

// the code below i dont understand at all. In my mind i
// understand what I need to call but Im missing something important

/*function getCardElement(cardData) {
const previewImage = cardTemplate.cloneNode(true);
card.addEventListener("click", () => {
  card.classList.add('preview_image_active');
});*/
