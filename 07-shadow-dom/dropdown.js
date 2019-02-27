const template = document.createElement('template');
// Using template - Slot comes free with shadow DOM root
template.innerHTML = `
    <style>
        div {
            padding: 8px;
            border: 1px solid gray;
            width: 150px;
        }
    </style>
    <button>dropdown</button>
    <div>
        <slot></slot>
    </div>
`;

export class XDropdown extends HTMLElement {
    // explicity tell what attributes to observe
    static get observedAttributes() {
        return ['title'];
    }

    // title property as used via js code
    get title() {
        return this._title;
    }
    set title(value) {
        this._title = value;
        this.buttonElement.innerText = this._title;
    }

    constructor() {
        super();
        // local variable
        this._title = 'dropdown';
        this.show = false; 

        // Create shadow DOM - attach it as open
        this.root = this.attachShadow({mode: 'open'});
        // Clone our template to it
        this.root.appendChild(template.content.cloneNode(true));

        this.buttonElement = this.root.querySelector('button');
        this.buttonElement.addEventListener('click', () => {
            this.toggle();
        });

        this.contentElement = this.root.querySelector('div');
        this.contentElement.style.display = 'none';
    }

    // listen to attribute changes - LCH
    attributeChangedCallback(attrName, oldvalue, newvalue) {
        if(attrName === 'title' && oldvalue !== newvalue) {
            this.title = newvalue;
        }
    }

    toggle() {
        this.show = !this.show;
        this.contentElement.style.display = this.show ? 'block' : 'none';
        this.dispatchEvent(new CustomEvent('show', { detail: this.show }));;
    }
}

customElements.define('x-dropdown', XDropdown);
