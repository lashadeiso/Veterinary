const container = document.querySelector(".container");
const animalName = document.querySelector(".animal-name");
const animalAge = document.querySelector(".animal-age");
const imgURL = document.querySelector(".img-url");
const genderControl = document.querySelector(".gender-control");
const ownerName = document.querySelector(".owner-name");
const ownerMobile = document.querySelector(".owner-mobile");
const submitBTN = document.querySelector(".form-wrapper");
const listShowHidden = document.querySelector(".list");
const section2 = document.querySelector(".section-2");
let arr = [];

listShowHidden.addEventListener("click", () => {
  listShowHidden.classList.toggle("show");

  if (listShowHidden.classList.contains("show")) {
    section2.classList.remove("hidden");
    listShowHidden.innerHTML = "Hide List";
  } else {
    section2.classList.add("hidden");
    listShowHidden.innerHTML = "Show List";
  }
});

function inputValidation(anName, anAge, imgUrl, owName, owMobile) {
  !anName.value
    ? anName.classList.add("error-input")
    : anName.classList.remove("error-input");
  !anAge.value
    ? anAge.classList.add("error-input")
    : anAge.classList.remove("error-input");
  !imgUrl.value
    ? imgUrl.classList.add("error-input")
    : imgUrl.classList.remove("error-input");
  !owName.value
    ? owName.classList.add("error-input")
    : owName.classList.remove("error-input");
  !owMobile.value
    ? owMobile.classList.add("error-input")
    : owMobile.classList.remove("error-input");
}

function clearInputs(anName, anAge, imgUrl, owName, owMobile) {
  (anName.value = ""),
    (anAge.value = ""),
    (imgUrl.value = ""),
    (owName.value = ""),
    (owMobile.value = "");
}

submitBTN.addEventListener("submit", (e) => {
  e.preventDefault();
  let genderValue = document.querySelector(
    'input[name="gender"]:checked'
  ).value;
  inputValidation(animalName, animalAge, imgURL, ownerName, ownerMobile);

  if (!document.querySelector(".error-input")) {
    newEl = document.createElement("li");
    newEl.classList.add("card");
    newEl.innerHTML = `
    <div class="animal-wrapper">
            <div class="animal-img">
            <img src="${imgURL.value.trim()}"alt="dog-img">
            </div>
            <div class="animal-info">
              <div class="an-name anim">
                <label>Name:</label>
                <p>${animalName.value.trim()}</p>
              </div>
              <div class="an-age anim">
                <label>Age:</label>
                <p>${animalAge.value.trim()}</p>
              </div>
              <div class="an-gender anim">
                <label>Gen:</label>
                <p>${genderValue}</p>
              </div>
            </div>
          </div>
          <hr />
          <div class="owner-info">
            <div class="own-name own">
              <label>Owner Name:</label>
              <p>${ownerName.value.trim()}</p>
            </div>
            <div class="own-mobile own">
              <label>Owner Mob:</label>
              <p>${ownerMobile.value.trim()}</p>
            </div>
          </div>
    `;
    arr.push(newEl);
    clearInputs(animalName, animalAge, imgURL, ownerName, ownerMobile);
    arr.forEach((item) => section2.appendChild(item));
  }
});
