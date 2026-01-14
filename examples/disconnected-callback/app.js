class AppCustomElement extends HTMLElement {
  constructor(){
    super();
    console.log("constructor")
  }
  connectedCallback(){
    console.log("connected")
  }

  disconnectedCallback(){
    console.log("disconnected")
  }
}

customElements.define("app-custom-element", AppCustomElement)

document.querySelector("app-custom-element").remove();
