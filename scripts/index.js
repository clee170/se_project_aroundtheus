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
const prolfileTitleInput = document.querySelector("#profile-title-input");
const prolfileDescriptionInput = document.querySelector(
  "#profile-description-input"
);
const profileEditForm = profileEditmodal.querySelector(".modal__form");
const cardListEl = document.querySelector(".cards__list");
const cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;

function closePopup() {
  profileEditmodal.classList.remove("modal_opened");
}
function getCardElement(cardData) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImageEl = cardElement.querySelector(".card__image");
  const cardTitleEl = cardElement.querySelector(".card__title");
  cardTitleEl.textContent = cardData.name;
  cardImageEl.alt = cardData.name;
  cardImageEl.src = cardData.link;
  return cardElement;
}

function handleProfileSubmit(e) {
  e.preventDefault();
  profileTitle.textContent = prolfileTitleInput.value;
  profileDescription.textContent = prolfileDescriptionInput.value;
  closePopup();
}

profileEditButton.addEventListener("click", () => {
  prolfileTitleInput.value = profileTitle.textContent;
  prolfileDescriptionInput.value = profileDescription.textContent;
  profileEditmodal.classList.add("modal_opened");
});

modalClose.addEventListener("click", closePopup);

profileEditForm.addEventListener("submit", handleProfileSubmit);

initialCards.forEach((cardData) => {
  const cardElement = getCardElement(cardData);
  cardListEl.prepend(cardElement);
});
