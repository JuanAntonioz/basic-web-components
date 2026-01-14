class MyComponent extends HTMLElement {
  constructor () {
    super();
    this.attachShadow({
      mode: "open"
    })
  }

  getStyles() {
    return `
      <style>
        :host {
          display: inline-block;
          --primary-color: tomato;
          --secondary-color: skyblue;
          --heading-primary: 30px;
          --heading-secondary: 25px;
        }
        section {
          background: var(--primary-color);
        }
        section > div {
          background: var(--secondary-color);
        }
        h1 {
          font-size: --var(--heading-primary)
        }
        p {
          font-size: --var(--heading-secondary)
        }
      </style>
    `
  }

  getTemplate() {
    const template = document.createElement("template")
    template.innerHTML = `
      <section>
        <h1><slot name="title"></slot></h1>
        <div>
        <p><slot name="body"></slot></p>
        </div>
      </section>
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
