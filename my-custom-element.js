class MyCustomElement extends HTMLElement {
	constructor() {
		/**
		 * Provide access to the methods and properties of the HTMLElement class
		 */
		super();

		this.attachShadow({
			mode: "open",
		});

    this.img = this.getAttribute("img")
	}

	getTemplate() {
		const template = document.createElement("template");
		template.innerHTML = `
      <section class="product-card-container">
        <div>
          <img src="${this.img}" alt="image" class="product-card-image"/>
        </div>
        <header class="product-card-header">
          <h2 class="product-card-title">
            <slot name="product-name"></slot>
          </h2>
        <header>
        <div class="product-card-body">
          <span class="product-card-price product-card-price__list-price">
            $ <slot name="product-list-price"></slot>
          </span>
          <span class="product-card-price  product-card-price__selling-price">
            $ <slot name="product-selling-price"></slot>
          </span>
        </div>
      </section>
      ${this.getStyles()}
    `;
		return template;
	}

	getStyles() {
		return `
      <style>
        :host {
          display: inline-block;
          margin: 0;
        }
        :host(.dark-theme) .product-card-container {
          background-color: #979797;
        }
        :host([withoutImage]) .product-card-image {
          display: none;
        }
        body, html {
          font-size: 16px;
        }
        * {
          box-sizing: border-box;
        }
        .product-card-container * {
          font-family: sans-serif, tahoma, arial;
          color: #363842;
        }
        .product-card-container {
          max-width: 20rem;
          background-color: #FFFFFF;
          border-radius: 10px;
          border: 1px solid #D8D9E0;
          padding: 2.5rem;
        }
        .product-card-image {
          border-radius: 10px;
          display:block;
          border: none;
          width: 100%;
        }
        .product-card-title {
          font-size: 1.6rem;
          font-weight: normal;
        }
        .product-card-body {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .product-card-price {
        }
        .product-card-price__list-price {
          font-size: 1.6rem;
          text-decoration: line-through;
        }
        .product-card-price__selling-price{
          font-size: 2.9rem;
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
