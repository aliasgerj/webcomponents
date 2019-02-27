const template = document.createElement('template');
// Using template - Slot comes free with shadow DOM root
template.innerHTML = `
    <button>dropdown</button>
    <div>
        <slot></slot>
    </div>
`;

export class XDropdown extends HTMLElement {
    constructor() {
        super();
        // local variable
        this.show = false; 

        // Create shadow DOM - attach it as open
        this.root = this.attachShadow({mode: 'open'});
        // Clone our template to it
        this.root.appendChild(template.content.cloneNode(true));

        // local variable - get reference of the div, and set styles
        this.contentElement = this.root.querySelector('div');
        this.contentElement.style.display = 'none';

        // local variable - get reference to the button and attach event handler to it
        this.buttonElement = this.root.querySelector('button');
        this.buttonElement.addEventListener('click', () => {
            this.show = !this.show;
            this.contentElement.style.display = this.show ? 'block': 'none';
        });
    }
}

customElements.define('x-dropdown', XDropdown);