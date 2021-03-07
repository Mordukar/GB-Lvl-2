class Validator {
  constructor(formId, config) {
    this._form = null;
    this._config = config;
    this.setListener(formId);
  }

  setListener(formId) {
    this._form = document.querySelector(formId);

    this._form.addEventListener("submit", (e) => {
      e.preventDefault();
      this._checkForm();
    });
  }

  _checkForm() {
    const inputs = this._form.querySelectorAll("input");

    Array.from(inputs)
      .filter(({ name }) => this._config[name])
      .forEach(({ name, value }) => {
        const { validateRe } = this._config[name];
        const isValid = validateRe.test(value);

        if (!isValid) {
          console.log(`Некорректно введено поле ${name}`);
        }
      });
  }
}

const formConfig = {
  email: { validateRe: /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/gim },
  password: {
    validateRe: /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8}$/,
  },
  tel: { validateRe: /^\+?[78][-\(]?\d{3}\)?-?\d{3}-?\d{2}-?\d{2}$/ },
};

new Validator("#form", formConfig);
