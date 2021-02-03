class Tooltip extends HTMLElement {
    constructor() {
        super();
        this._tooltipIcon;
        // this._tooltipContainer;
        this._tooltipVisible = false;
        this._tooltipText = 'Some dummy tooltip text';
        this.attachShadow({ mode: 'open'});
        this.shadowRoot.innerHTML = `
            <style>
                div {
                    font-weight: normal;
                    background-color: black;
                    color: white;
                    position: absolute;
                    top: 1.5rem;
                    left: 0.75rem;
                    z-index: 1;
                    padding: 0.15rem;
                    border-radius: 3px;
                    box-shadow: 1px 1px 6px rgba(0,0,0,0.26)
                }

                :host {
                    position: relative;
                }

                :host(.important) {
                    background: var(--color-primary, #ccc);
                    padding: 0.15rem;
                }

                :host-context(p) {
                    font-weight: bold;
                }

                .highlight {
                    background-color: red;
                }

                ::slotted(.highlight){
                    border-bottom: 1px dotted red;
                }

                .icon {
                    background: black;
                    color: white;
                    padding: 0.15rem 0.5rem;
                    text-align: center;
                    border-radius: 50%;
                }
            </style>
            <slot>Some default</slot>
            <span class="icon">?</span>
        `;
    }

    connectedCallback() {
        if (this.hasAttribute('text')) {
            this._tooltipText = this.getAttribute('text');
        }
        // const tooltipIcon = document.createElement('span');
        // tooltipIcon.textContent = " (?)";
        this._tooltipIcon = this.shadowRoot.querySelector('span');
        this._tooltipIcon.addEventListener("mouseenter", this._showTooltip.bind(this));
        this._tooltipIcon.addEventListener("mouseleave", this._hideTooltip.bind(this));
        this._render();
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue === newValue) {
            return;
        }
        if (name === 'text') {
            this._tooltipText = newValue;
        }
    }

    static get observedAttributes() {
        return ['text']
    }

    disconnectedCallback() {
        this._tooltipIcon.removeEventListener("mouseenter", this._showTooltip); // this doesn't really have an effect
        this._tooltipIcon.removeEventListener("mouseleave", this._hideTooltip); // the browser automatically removes ev. listeners when an element is removed from a page
    }

    _render() {
        let tooltipContainer = this.shadowRoot.querySelector('div');
        if (this._tooltipVisible) {
            tooltipContainer = document.createElement('div');
            tooltipContainer.textContent = this._tooltipText;
            this.shadowRoot.appendChild(tooltipContainer);
        } else {
            if (tooltipContainer) {
                this.shadowRoot.removeChild(tooltipContainer);
            }
        }
    }

    // _ in front is a convections that states that this method should be used only inside of this class
    // it can be called in ex. index.html like uc-tooltip._showTooltip, but it shouldn't be
    _showTooltip() { 
        // this._tooltipContainer = document.createElement('div');
        // this._tooltipContainer.textContent = this._tooltipText;
        // this.shadowRoot.appendChild(this._tooltipContainer);
        this._tooltipVisible = true;
        this._render();
    }

    _hideTooltip() { 
        // this.shadowRoot.removeChild(this._tooltipContainer);
        this._tooltipVisible = false;
        this._render();
    }
}

customElements.define('uc-tooltip', Tooltip);