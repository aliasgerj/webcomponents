export class XDropdown extends HTMLElement {

    // Called whenever element has been attached to the DOM
    connectedCallback() {
        this.innerHTML = 'Hello from Custom Element';
    }

}

// Register the element with the browser 
customElements.define('x-dropdown', XDropdown);