const openPopup = document.querySelector(".popupCall");
const closePopup = document.querySelector(".popup__container");
const closePopup2 = document.querySelector(".close");
const popup = document.querySelector(".popup");

openPopup.addEventListener("click", function (e) {
  e.preventDefault();
  popup.classList.add("active");
  document.querySelector(".info").style.marginLeft = "50px";
});

closePopup.addEventListener("click", () => {
  popup.classList.remove("active");
  document.querySelector(".info").style.marginLeft = "10%";
});

closePopup2.addEventListener("click", () => {
  popup.classList.remove("active");
  document.querySelector(".info").style.marginLeft = "10%";
});
