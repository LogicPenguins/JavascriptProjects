let count_current = document.getElementById('count-el');
let saved_current = document.getElementById('save-el');
let count = 0;


function increment() {
    count += 1;
    count_current.textContent = count;
}


function save() {
    saved_current.textContent += count_current.textContent + " - ";
    count = 0;
    count_current.textContent = 0;

}