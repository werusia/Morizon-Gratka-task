const INPUT_ERROR_CLASS_NAME = "has-error";
const MESSAGE_ERROR_CLASS_NAME = "error-message";

export default class FormValidator {
  constructor(el) {
    this.el = el;
  }

  listen() {
    this.el.setAttribute("novalidate", true);

    this.el.addEventListener("submit", (event) => {
      event.preventDefault();

      this.clearErrors();
      this.validate();
    });
  }

  validate() {
    const invalidInputs = Array.from(this.getRequiredInputs()).filter(
      (input) => !input.value
    );

    if (!invalidInputs.length) {
      this.el.submit();

      return;
    }

    invalidInputs.forEach((input) => {
      const errorMessage = document.createElement("span");
      errorMessage.classList.add(MESSAGE_ERROR_CLASS_NAME);
      input.classList.add(INPUT_ERROR_CLASS_NAME);

      errorMessage.textContent = "error";

      input.after(errorMessage);
    });
  }

  clearErrors() {
    this.el
      .querySelectorAll(`span.${MESSAGE_ERROR_CLASS_NAME}`)
      .forEach((error) => {
        error.remove();
      });

    this.getRequiredInputs().forEach((input) => {
      input.classList.remove(INPUT_ERROR_CLASS_NAME);
    });
  }

  getRequiredInputs() {
    return this.el.querySelectorAll("input[required]");
  }
}
