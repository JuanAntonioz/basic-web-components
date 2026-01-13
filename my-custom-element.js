
class MyCustomElement extends HTMLElement {
    constructor() {
        /**
         * Provide access to the methods and properties of the HTMLElement class
         */
        super();       

        this.p = document.createElement('p');
    }

    connectedCallback() {
        this.p.textContent = "Message";
        this.appendChild(this.p);
    }
}

customElements.define('my-custom-element', MyCustomElement)