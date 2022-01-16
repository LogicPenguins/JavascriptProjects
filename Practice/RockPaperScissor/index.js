let hands = [`rock`, `paper`, `scissor`];


function move() {
    return hands[Math.floor(Math.random() * hands.length)];
}

console.log(move())