export default class FormGenerator {
  constructor(el, config) {
    this.el = el;
    this.config = config;
  }

  build() {
    this.config.forEach((configEntry) => {
      const input = document.createElement("input");

      Object.entries(configEntry).forEach(([attribute, value]) => {
        input.setAttribute(attribute, value);
      });

      this.el.appendChild(input);
    });
  }
}
