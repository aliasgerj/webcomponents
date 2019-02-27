const template = document.createElement('template');
template.innerHTML = `
    <div>Hello from Web Components Templates</div>
    `;

export class XDropdown extends HTMLElement {
    constructor() {
        super();
        // Creating a shadow root - open allows us to work with the Shadow DOM
        this.root = this.attachShadow({ mode: 'open'});
        // Append our template - clone the content (otherwise it will be erased!!)
        this.root.appendChild(template.content.cloneNode(true));
    }
}

customElements.define('x-dropdown', XDropdown);