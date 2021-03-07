"use strict";

class Validator {
  constructor(formId) {
    this.setListener(formId);
  }

  setListener(formId) {
    const form = document.querySelector(formId);

    form.addEventListener("submit", (e) => {
      e.preventDefault();
    });
  }

  checkForm(inputs) {
    const inputs = form.querySelectorAll("input");

    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/gim;
    const passwordRegex = /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8}$/;
    const telRegex = /^\+?[78][-\(]?\d{3}\)?-?\d{3}-?\d{2}-?\d{2}$/;

    Array.from(inputs).forEach((input) => {
      const id = input.getAttribute("id");

      let isValid = false;

      switch (id) {
        case "email":
          isValid = emailRegex.test(input.value);
          break;
        case "password":
          isValid = passwordRegex.test(input.value);
          break;
        case "tel":
          isValid = telRegex.test(input.value);
          break;
        default:
          break;
      }

      if (!isValid) {
        console.log("Некорректно введено поле " + `${id}`);
      }
    });
  }
}

const formValidator = new Validator("#form");
formValidator.checkForm();
