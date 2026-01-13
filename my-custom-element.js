class MyCustomElement extends HTMLElement {
	constructor() {
		/**
		 * Provide access to the methods and properties of the HTMLElement class
		 */
		super();

		this.attachShadow({
			mode: "open",
		});
	}

	getTemplate() {
		const template = document.createElement("template");
		template.innerHTML = `
      <section>
        <h2>
          <slot name="title"></slot>
        </h2>
        <div>
          <slot name="body"></slot>
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
          color: brown;
        }
      </style>
    `;
	}

	render() {
		this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
	}

	connectedCallback() {
		this.render();
	}
}

customElements.define("my-custom-element", MyCustomElement);
