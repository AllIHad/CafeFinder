class CafeItem  extends HTMLElement {
    constructor(){
        super();
        this.shadowDOM = this.attachShadow({mode : 'open'})
    }

    set cafe(cafe) {
        this._cafe = cafe;
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        :host {
            display: block;
            margin-bottom: 18px;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            border-radius: 10px;
            overflow: hidden;
        }
        .fan-art-cafe {
            width: 100%;
            max-height: 300px;
            object-fit: cover;
            object-position: center;
        }
        .cafe-info {
            padding: 24px;
        }
        .cafe-info > h2 {
            font-weight: lighter;
        }
        
        .cafe-info > p {
            margin-top: 10px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 10; /* number of lines to show */
        }
    
        </style>

            <img class="fan-art-cafe" src="${this._cafe.website_url}" alt="Fan Art">
           <div class="club-info">
               <h2>cafe Name: ${this._cafe.name}</h2>
               <p>Brewery Type : ${this._cafe.brewery_type}</p>
               <p>City : ${this._cafe.city}</p>
           </div>`;
    }
}

customElements.define("cafe-item", CafeItem);