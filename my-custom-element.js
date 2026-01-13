class MyCustomElement extends HTMLElement {
	constructor() {
		/**
		 * Provide access to the methods and properties of the HTMLElement class
		 */
		super();
	}

	getTemplate() {
		const template = document.createElement("template");
		template.innerHTML = `
      <section>
        <h2>Title</h2>
        <div>
          <p>message</p>
        </div>
      </section>
      ${this.getStyles()}
    `;
		return template;
	}

	getStyles() {
		return `
      <style>
        h2 {
          color: orange;
        }
      </style>
    `;
	}

	render() {
		this.appendChild(this.getTemplate().content.cloneNode(true));
	}

	connectedCallback() {
		this.render();
	}
}

customElements.define("my-custom-element", MyCustomElement);
