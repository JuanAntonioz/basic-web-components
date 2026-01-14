class ProductCard extends HTMLElement {
  constructor () {
    super()
    this.attachShadow({ mode: "open"})
  }

  getTemplate(){
    const template = document.createElement("template")
    template.innerHTML = `
      <article class="product-card">
        <figure class="product-card__media">
          <img src="./assets/sku-MX442.png" />
        </figure>
        <header class="product-card__header">
          <h2 class="product-card__title">Beats Studio Pro</h2>
          <p class="product-card__price">$349.99</p>
        </header>
        <ul class="product-cart__tags">
          <li><span>USB C</span></li>
          <li><span>Noise Cancelling</span></li>
          <li><span>Transparency Mode</span></li>
        </ul>

        <section class="product-card__details">
          <ul class="product-card__bullets">
            <li><span>High-fidelity lossless audio via USB-Cfootnote1</span></li>
            <li><span>Active Noise Cancelling and Transparency mode</span></li>
            <li><span>Up to 40 hours of listening time footnote3</span></li>
          </ul>
        </section>

        <footer class="product-card__actions" aria-label="Acciones">
          <button type="button">Add to cart</button>
          <a href="/">View details</a>
        </footer>
      </article>
    `
    return template
  }

  render(){
    this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true))
  }

  connectedCallback(){
    this.render()
  }
}

customElements.define("product-card", ProductCard)
