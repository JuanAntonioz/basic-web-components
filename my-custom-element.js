const template = document.createElement("div");
template.innerHTML = `
  <style>
      h1 {
        color: skyblue;
      }
  </style>
  <h1>title</h1>
  <p>text message</p>
`;
class MyCustomElement extends HTMLElement {
	constructor() {
		/**
		 * Provide access to the methods and properties of the HTMLElement class
		 */
		super();

		this.p = document.createElement("p");
	}

	connectedCallback() {
		this.p.textContent = "Message";
		this.appendChild(this.p);
		this.appendChild(template);
	}
}

customElements.define("my-custom-element", MyCustomElement);
