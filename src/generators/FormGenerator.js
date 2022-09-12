export default class FormGenerator {
  constructor(el, config) {
    this.el = el;
    this.config = config;
  }

  build() {
    this.config.forEach((configEntry) => {
      const input = document.createElement("input");

      let label = null;

      Object.entries(configEntry).forEach(([attribute, value]) => {
        input.setAttribute(attribute, value);

        if (attribute === "label" && configEntry.id) {
          label = document.createElement("label");

          label.textContent = value;
          label.setAttribute("for", configEntry.id);
        }
      });

      this.el.appendChild(input);

      if (label) {
        input.before(label);
      }
    });
  }
}
