let player = {
    name: `Per`,
    chips: 200,
}

let cards = [];
let sum = 0
let has_blackjack = false;
let message = '';
let message_el = document.querySelector(`#message-el`);
let sum_el = document.querySelector(`#sum-el`);
let cards_el = document.querySelector(`#cards-el`);
let player_el = document.querySelector(`#player-el`);
let is_alive = false;


player_el.textContent = player.name + ": $" + player.chips;

function get_random_card() {
    let num = Math.floor(Math.random() * 11) + 1;
    if (num == 1) {
        return 11;
    }
    else if (num in [11, 12, 13]) {
        return 10;
    }
    else {
        return num;
    }
}

function start_game() {
    cards = [];
    sum = 0;
    is_alive = true;
    let first_card = get_random_card();
    let second_card = get_random_card();
    cards.push(first_card, second_card);
    sum += first_card + second_card;
    render_game(); 
}

function render_game() {
    cards_el.textContent = `Cards: `;
    for (let i=0; i < cards.length; i++) {
        cards_el.textContent += (cards[i] + " ");
    }
    sum_el.textContent = `Sum: ${sum}`;
    if (sum < 21) {
        message = 'Do you want to draw a new card?';
    } else if (sum === 21) {
        message = 'Wohoo! You got Blackjack!';
        has_blackjack = true;
    } else if (sum > 21) {
        message = 'You are out of the game!';
        is_alive = false;
    }
    message_el.textContent = message;
}

function new_card() {
    if (is_alive === true) {
        let card = get_random_card();
        cards.push(card);
        sum += card;
        render_game();
    }
}


for (let i=0; i<=4; i++) {
    console.log(`This is iteration # ${i + 1}`)
}
