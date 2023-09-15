const toggleButton = () => {
  const allRatingBtns = document.querySelectorAll(".app__wrapper-btn");
  const submitBtn = document.querySelector(".app__submit-btn");
  const app = document.querySelector(".app");
  const success = document.querySelector(".success");
  const addRating = document.querySelector(".add-rating");
  // State
  let isBtnToggled = false;
  let rating = 0;

  allRatingBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (isBtnToggled) {
        allRatingBtns.forEach((btn) => {
          if (btn.classList.contains("app__wrapper-btn-toggled")) {
            btn.classList.remove("app__wrapper-btn-toggled");
            isBtnToggled = !isBtnToggled;
          }
        });
      }
      btn.classList.add("app__wrapper-btn-toggled");
      rating = btn.value;
      isBtnToggled = !isBtnToggled;
    });
  });

  submitBtn.addEventListener("click", () => {
    console.log(rating);
    if (rating >= 1 || rating <= 5) {
      rating = document.createTextNode(rating);
      app.classList.add("hide-display");
      addRating.appendChild(rating);
      success.classList.add("show-display");
    }
  });
};

export default toggleButton;
