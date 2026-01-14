class ProductCard extends HTMLElement {
  constructor () {
    super()
    this.attachShadow({ mode: "open"})
  }

  getStyles (){
    return `
      <style>
        /* =========================================================
          1) PRIMITIVES (PALETTE TOKENS)
          - “Ink buckets” only (no UI meaning yet).
          ========================================================= */
        :host {
          --neutral-0: #FFFFFF;
          --neutral-50: #F7F7F7;
          --neutral-100: #F5F5F5;
          --neutral-200: #E6E6E6;
          --neutral-300: #D1D1D1;
          --neutral-500: #8C8C8C;
          --neutral-700: #4C4C4C;
          --neutral-900: #1A1A1A;

          --brand-500: #CB4D8C;
          --brand-600: #B23473;

          /* Feedback primitives */
          --success-500: #30A66B;
          --warning-500: #F4AF25;
          --danger-500:  #E23636;
        }

        /* =========================================================
          2) SEMANTIC TOKENS (ROLE TOKENS)
          - These define “what the color is used for”.
          - This is what components should consume.
          ========================================================= */
        :host {
          /* Base */
          --background: var(--neutral-50);
          --foreground: var(--neutral-900);

          /* Surfaces */
          --bg-canvas:  var(--neutral-50);
          --bg-surface: var(--neutral-0);
          --bg-muted:   var(--neutral-100);

          /* Text */
          --text-primary: var(--neutral-900);
          --text-secondary: var(--neutral-700);
          --text-tertiary:  var(--neutral-500);

          /* Borders */
          --border-subtle: var(--neutral-200);
          --border-strong: var(--neutral-300);

          /* Interactive */
          --link:       var(--brand-500);
          --link-hover: var(--brand-600);
          --ring:       var(--brand-500);

          /* Buttons */
          --btn-primary-bg:       var(--neutral-900);
          --btn-primary-fg:       var(--neutral-0);
          --btn-primary-bg-hover: var(--neutral-700);

          --btn-secondary-bg:       var(--neutral-0);
          --btn-secondary-fg:       var(--neutral-900);
          --btn-secondary-border:   var(--border-strong);
          --btn-secondary-bg-hover: var(--neutral-100);

          /* Pills */
          --pill-bg:     var(--neutral-500);
          --pill-fg:     var(--neutral-0);
          --pill-border: var(--border-subtle);

          /* Status (roles mapped from primitives) */
          --status-success: var(--success-500);
          --status-warning: var(--warning-500);
          --status-danger:  var(--danger-500);
        }

        .btn {
          border-radius: 12px;
          padding: 10px 12px;
          border: 1px solid transparent;
          font-weight: 500;
        }

        .btn--primary {
          background: var(--btn-primary-bg);
          color: var(--btn-primary-fg);
        }
        .btn--primary:hover {
          background: var(--btn-primary-bg-hover);
        }

        .btn--secondary {
          background: var(--btn-secondary-bg);
          color: var(--btn-secondary-fg);
          border-color: var(--btn-secondary-border);
          text-decoration: none;
        }
        .btn--secondary:hover {
          background: var(--btn-secondary-bg-hover);
        }

        /* links */
        .link {
          color: var(--link);
        }
        .link:hover {
          color: var(--link-hover);
        }

        .product-card {
          width: 100%;
          max-width: 32rem;
          background: var(--bg-surface);
          border-radius: 6px;
          border: 1px solid var(--border-subtle);
          color: var(--text-primary);
          display:flex;
          gap: 0.625rem;
          padding: 0.5rem;
        }
        .product-card__media {
          max-width: 13.5rem;
          width: 100%;
          background-color: #F7F7F7;
          border-radius: 8px;
          display:flex;
          align-items: center;
          justify-content: center;
          margin: 0;
        }
        .product-card__media img {
          width: 100%;
          height: auto;
          max-width: 10rem;
        }
        .product-card__title {
          color: var(--text-primary);
          margin: 0;
          font-size: 1.3rem;
          font-weight: bold;
        }
        .product-card__price {
          color: var(--text-primary);
          font-size: 1rem;
        }
        .product-card__tags {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          gap: 0.2rem;
        }
        .product-card__tags li {
          background: var(--pill-bg);
          color: var(--pill-fg);
          border-radius: 4px;
          font-size: 0.7rem;
          padding: 0 0.5rem;
          height: 18px;
          display: flex;
          align-items: center;
        }
        .product-card__description {
          font-size: 0.85rem;
        }
        .product-card__bullets {
          list-style: none;
          margin: 1rem 0;
          padding: 0;
        }
        .product-card__bullets li {
          margin-bottom: 0.5rem;
        }

        /* Buttons */
        .product-card__actions {
          font-size: 0.9rem;
        }



      </style>
    `
  }

  getTemplate(){
    const template = document.createElement("template")
    template.innerHTML = `
      <article class="product-card">
        <figure class="product-card__media">
          <img src="./assets/sku-MX442.png" />
        </figure>
        <div class="product-card__content">
          <header class="product-card__header">
            <h2 class="product-card__title">Beats Studio Pro</h2>
            <p class="product-card__price">$349.99</p>
          </header>
          <ul class="product-card__tags">
            <li><span>USB C</span></li>
            <li><span>Noise Cancelling</span></li>
            <li><span>Transparency Mode</span></li>
          </ul>

          <section class="product-card__description">
            <ul class="product-card__bullets">
              <li><span>High-fidelity lossless audio via USB-Cfootnote1</span></li>
              <li><span>Active Noise Cancelling and Transparency mode</span></li>
              <li><span>Up to 40 hours of listening time footnote3</span></li>
            </ul>
          </section>

          <footer class="product-card__actions" aria-label="Acciones">
            <button type="button" class="btn btn--primary">Add to cart</button>
            <a href="/" class="btn btn--secondary">View details</a>
          </footer>
        </div>
      </article>
      ${this.getStyles()}
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
