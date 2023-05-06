import './cafe-item.js';

class CafeList extends HTMLElement {
    constructor(){
        super();
        this.shadowDOM = this.attachShadow({mode :'open'})
    }

    set cafe(cafe) {
        this._cafe = cafe;
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = "";
        this._weathers.forEach(cafe => {
            const cafeItemElement = document.createElement("cafe-item");
            cafeItemElement.cafe = cafe;
            this.shadowDOM.appendChild(cafeItemElement);
        })
    }

    renderError(message) {
        this.shadowDOM.innerHTML = `
        <style>        
        .placeholder {
            font-weight: lighter;
            color: rgba(0, 0, 0, 0.5);
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
        }
        </style>
        `;
        this.shadowDOM.innerHTML += `<h2 class="placeholder">${message}</h2>`;
    }
}

customElements.define("cafe-list", CafeList);