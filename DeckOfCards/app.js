const table = document.querySelector('#table');
const btn = document.querySelector('button');


class Deck {
    constructor() {
        this.url = 'http://deckofcardsapi.com/api/deck';
    }

    async getDeck() {
        let res = await axios.get(`${this.url}/new/shuffle/?deck_count=1`);
        this.deckId = res.data.deck_id;
    }

    async drawCard() {
        let res = await axios.get(`${this.url}/${this.deckId}/draw/?count1`);
        this.onScreen(res);
    }

    onScreen(res) {
        let randNum = Math.floor(Math.random() * 90);

        let img = document.createElement('img');
        img.src = res.data.cards[0].image;
        img.style.transform = `rotate(${randNum}deg)`;

        table.appendChild(img);
    }
}

let deck = new Deck; 
deck.getDeck();

btn.addEventListener('click', (e) => {
    deck.drawCard();
})