const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");
const signUpContainer = document.getElementById("signUpContainer");

signUpButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});
window.addEventListener("DOMContentLoaded", () => {
  const datePicker = document.querySelector("#myDatePicker");

  setTimeout(() => {
    const shadow = datePicker.shadowRoot;
    if (shadow) {
      const input = shadow.querySelector("input");
      if (input) {
        input.style.fontFamily = "inherit";
        input.style.fontSize = "0.8rem";
        input.style.fontWeight = "normal";
        input.style.padding = "0";
        input.style.border = "transparent";
        input.style.backgroundColor = "inherit";
        input.addEventListener("focus", () => {
          input.style.border = "none";
          input.style.outline = "none";
          input.style.boxShadow = "none";
        });
      }
    }
  }, 100);
});
const genderSelect = document.getElementById("gender");

genderSelect.addEventListener("change", function () {
  if (this.value !== "") {
    this.style.color = "black";
  }
});
function insertHeadingsIfMobile() {
  const formGroup = document.querySelector(".form-group");
  if (!formGroup) return;

  const allH1s = formGroup.getElementsByTagName("h1");
  const firstH1 = allH1s[0];

  if (window.innerWidth < 600) {
    if (formGroup.dataset.headingsAdded === "true") return;

    const headingsHTML = `
      <h1 class="extra-heading">ثبت نام</h1>
      <h1 class="extra-heading" style="color: white">ثبت نام </h1>
      <h1 class="extra-heading" style="color: white">ثبت نام </h1>
      <h1 class="extra-heading" style="color: white">ثبت نام </h1>
      <h1 class="extra-heading" style="color: white">ثبت نام </h1>
      <h1 class="extra-heading" style="color: white">ثبت نام </h1>
      <h1 class="extra-heading" style="color: white">ثبت نام </h1>
    `;

    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = headingsHTML;

    const headings = Array.from(tempDiv.children);
    headings.forEach((h) => {
      firstH1.insertAdjacentElement("afterend", h);
    });

    formGroup.dataset.headingsAdded = "true";
  } else {
    if (formGroup.dataset.headingsAdded === "true") {
      const extraHeadings = formGroup.querySelectorAll(".extra-heading");
      extraHeadings.forEach((h) => h.remove());
      formGroup.dataset.headingsAdded = "false";
    }
  }
}

window.addEventListener("DOMContentLoaded", insertHeadingsIfMobile);
window.addEventListener("resize", insertHeadingsIfMobile);

function adjustMargin() {
  if (
    /Android|iPhone|iPad|iPod/i.test(navigator.userAgent) &&
    window.innerWidth > 600
  ) {
    document.body.style.marginTop = "150px";
  } else if (
    /Android|iPhone|iPad|iPod/i.test(navigator.userAgent) &&
    window.innerWidth < 600
  ) {
    document.body.style.marginTop = "0";
  }
}

window.addEventListener("DOMContentLoaded", adjustMargin);
window.addEventListener("resize", adjustMargin);
//
//
//
//
//
//
//
//
//
//
const signUpSubmitButton = document.getElementById("signUpSubmitButton");
const signUpInputArray = signUpContainer.querySelectorAll("input,select");
signUpInputArray.forEach((input) => {
  const errorMessage = input
    .closest(".form--group")
    .querySelector(".form-group__empty");
  input.addEventListener("blur", () => {
    if (input.value.trim() === "") {
      input.classList.add("error");
      errorMessage.textContent = "پر کردن این فیلد الزامی است";
      errorMessage.style.opacity = "1";
    } else if (!input.checkValidity()) {
      input.classList.add("error");
      if (input.name === "email") {
        errorMessage.textContent =
          "باشد alizdehreza328@gmail.com ایمیل وروردی باید مانند";
        errorMessage.style.opacity = "1";
      } else if (input.name === "phone-number") {
        errorMessage.textContent = "شماره تلفن باید مانند09111243257 باشد";
        errorMessage.style.opacity = "1";
      } else if (input.name === "first-name" || input.name === "last-name") {
        errorMessage.textContent = "نام باید فقط شامل حروف باشد";
        errorMessage.style.opacity = "1";
      } else if (input.name === "password") {
        errorMessage.textContent = "باشد Majid@1372 رمز عبور باید مانند";
        errorMessage.style.opacity = "1";
      } else if (input.name === "age") {
        errorMessage.textContent = "سن فقط باید شامل عدد باشد";
        errorMessage.style.opacity = "1";
      }
    } else {
      input.classList.remove("error");
      errorMessage.wtyle.opacity = "0";
    }
  });
  input.addEventListener("focus", () => {
    input.classList.remove("error");
    errorMessage.style.opacity = "0";
  });
});

signUpSubmitButton.addEventListener("click", (e) => {
  e.preventDefault();
  signUpInputArray.forEach((input) => {
    const errorMessage = input
      .closest(".form--group")
      .querySelector(".form-group__empty");
    if (input.value.trim() === "") {
      input.classList.add("error");
      errorMessage.textContent = "پر کردن این فیلد الزامی است";
      errorMessage.style.opacity = "1";
    } else if (!input.checkValidity()) {
      input.classList.add("error");
      if (input.name === "email") {
        errorMessage.textContent =
          "باشد alizdehreza328@gmail.com ایمیل وروردی باید مانند";
        errorMessage.style.opacity = "1";
      } else if (input.name === "phone-number") {
        errorMessage.textContent = "شماره تلفن باید فقط شامل اعداد باشد";
        errorMessage.style.opacity = "1";
      } else if (input.name === "first-name" || input.name === "last-name") {
        errorMessage.textContent = "نام باید فقط شامل حروف باشد";
        errorMessage.style.opacity = "1";
      } else if (input.name === "password") {
        errorMessage.textContent = "باشد Majid@1372 رمز عبور باید مانند";
        errorMessage.style.opacity = "1";
      } else if (input.name === "age") {
        errorMessage.textContent = "سن فقط باید شامل عدد باشد";
        errorMessage.style.opacity = "1";
      }
    } else {
      input.classList.remove("error");
      errorMessage.style.opacity = "0";
    }
  });
});
//
//
//
//
//
const signInContainer = document.getElementById("signInContainer");
const signInSubmitButton = document.getElementById("signInSubmitButton");
const signInInputArray = signInContainer.querySelectorAll("input");
console.log(signInContainer, signInSubmitButton, signInInputArray);
signInInputArray.forEach((input) => {
  const errorMessage = input
    .closest(".form--group")
    .querySelector(".form-group__empty");
  input.addEventListener("blur", () => {
    if (input.value.trim() === "") {
      input.classList.add("error");
      errorMessage.style.opacity = "1";
    } else {
      input.classList.remove("error");
      errorMessage.wtyle.opacity = "0";
    }
  });
  input.addEventListener("focus", () => {
    input.classList.remove("error");
    errorMessage.style.opacity = "0";
  });
});

signInSubmitButton.addEventListener("click", (e) => {
  e.preventDefault();
  signInInputArray.forEach((input) => {
    const errorMessage = input
      .closest(".form--group")
      .querySelector(".form-group__empty");
    if (input.value.trim() === "") {
      input.classList.add("error");
      errorMessage.style.opacity = "1";
    } else {
      input.classList.remove("error");
      errorMessage.style.opacity = "0";
    }
  });
});
