class MyComponent extends HTMLElement {
  constructor () {
    super();
    this.attachShadow({
      mode: "open"
    })
  }

  getStyles() {
    console.log("styles")
    return `
      <style>
        h1 {
          color: brown;
          font-size: 16px;
        }
        p {
          color: #5d5c5c;
        }
      </style>
    `
  }

  getTemplate() {
    console.log("template")
    const template = document.createElement("template")
    template.innerHTML = `
      <div>
        <h1><slot name="title"></slot></h1>
        <p><slot name="body"></slot></p>
      </div>
      ${this.getStyles()}
    `
    return template;
  }

  render() {
    this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true))
  }

  connectedCallback(){
    this.render();
  }

}

customElements.define("my-component", MyComponent)
