const template = `
    <div>Menu</div>

`

export class Menu extends HTMLElement {
    constructor(){
        super()
    }
}

customElements.define('menu-section', Menu)