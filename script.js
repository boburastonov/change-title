const mainItem = document.querySelectorAll(".main-text__item");
const rightText = document.querySelector(".right__text");
const btnGroup = document.querySelector(".btn-group");
const submitBtn = document.querySelector(".submit-button");
const backBtn = document.createElement("button");
const subDesBtn = document.createElement("button");
const goBackBtn = document.createElement("button");
const goAheadBtn = document.createElement("button");

const next = () => {
  if (
    mainItem[0].classList.contains("item--active") &&
    mainItem[1].classList.contains("item--active") == false
  ) {
    mainItem[1].classList.add("item--active");
    btnGroup.removeChild(submitBtn);
    btnGroup.appendChild(backBtn);
    backBtn.innerHTML = "Back";
    backBtn.setAttribute("class", "btn");
    rightText.innerHTML = "Choose description content";
    btnGroup.appendChild(subDesBtn);
    subDesBtn.innerHTML = "Submit description";
    subDesBtn.setAttribute("class", "btn");
  }
};

submitBtn.addEventListener("click", next);

const prev1 = () => {
  if (
    mainItem[0].classList.contains("item--active") &&
    mainItem[1].classList.contains("item--active") &&
    mainItem[2].classList.contains("item--active") == false
  ) {
    mainItem[1].classList.remove("item--active");
    rightText.innerHTML = "Choose title content";
    btnGroup.removeChild(backBtn);
    btnGroup.removeChild(subDesBtn);
    btnGroup.appendChild(submitBtn);
  }
};

const prev2 = () => {
  if (
    mainItem[1].classList.contains("item--active") &&
    mainItem[2].classList.contains("item--active")
  ) {
    mainItem[2].classList.remove("item--active");
    rightText.innerHTML = "Choose description content";
    btnGroup.appendChild(backBtn);
    btnGroup.appendChild(subDesBtn);
    btnGroup.removeChild(goBackBtn);
    btnGroup.removeChild(goAheadBtn);
    btnGroup.style.display = 'flex'
  }
  next();
};

const prev3 = () => {
  if (
    mainItem[1].classList.contains("item--active") &&
    mainItem[2].classList.contains("item--active") == false
  ) {
    mainItem[2].classList.add("item--active");
    rightText.textContent = "Are you happy now?";
    goBackBtn.innerHTML = "No, go back";
    goBackBtn.setAttribute("class", "btn");
    btnGroup.appendChild(goBackBtn);
    goAheadBtn.innerHTML = "Yes, go ahead";
    goAheadBtn.setAttribute("class", "btn");
    btnGroup.appendChild(goAheadBtn);
    btnGroup.removeChild(backBtn);
    btnGroup.removeChild(subDesBtn);
    goAheadBtn.addEventListener("click", () => {
      rightText.innerHTML =
        "Ok, we're done. Thanks for sending us your <br> data!";
        btnGroup.style.display = 'none'
    });
  }
  next();
};

const back = () => {
  if (
    mainItem[0].classList.contains("item--active") &&
    mainItem[1].classList.contains("item--active") &&
    mainItem[2].classList.contains("item--active") == false
  ) {
    prev1();
    btnGroup.children[1].style.display = "none";
  } else if (
    mainItem[0].classList.contains("item--active") &&
    mainItem[1].classList.contains("item--active") &&
    mainItem[2].classList.contains("item--active")
  ) {
    prev2();
  }
};

backBtn.addEventListener("click", prev1);
subDesBtn.addEventListener("click", prev3);
goBackBtn.addEventListener("click", prev2);
