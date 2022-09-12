import FormGenerator from "./generators/FormGenerator";
import FormValidator from "./validators/FormValidator";
import registrationFormConfig from "./config/registration-form.json";
import loginFormConfig from "./config/login-form.json";
import "./styles/style.scss"

const registrationForm = document.querySelector("#form-register");
const loginForm = document.querySelector("#form-login");

const registrationFormGenerator = new FormGenerator(
  registrationForm,
  registrationFormConfig
);

const loginFormGenerator = new FormGenerator(loginForm, loginFormConfig);

registrationFormGenerator.build();
loginFormGenerator.build();

const formsToValidate = document.querySelectorAll("[data-validate]");
formsToValidate.forEach((formElement) => {
  new FormValidator(formElement).listen();
});
