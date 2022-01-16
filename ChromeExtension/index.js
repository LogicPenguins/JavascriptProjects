const local_storage_leads = JSON.parse(localStorage.getItem('my_leads'));
let my_leads = [];

const input_el = document.querySelector(`#input-el`);
const ul_el = document.querySelector(`#ul-el`);

const input_btn = document.querySelector(`#input-btn`);
const delete_btn = document.querySelector(`#delete-btn`);
const save_btn = document.querySelector(`#save-btn`);


if (local_storage_leads) {
    my_leads = local_storage_leads;
    render(my_leads);
}

input_btn.addEventListener("click", function() {
    my_leads.push(input_el.value);
    input_el.value = '';
    localStorage.setItem('my_leads', JSON.stringify(my_leads));
    render(my_leads);
})

delete_btn.addEventListener("dblclick", function() {
    my_leads = [];
    localStorage.clear();
    render(my_leads);
})

save_btn.addEventListener("click", function() {
    
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        my_leads.push(tabs[0].url)
        localStorage.setItem('my_leads', JSON.stringify(my_leads));
        render(my_leads);
    });
})

function render(leads) {
    ul_el.textContent = '';
    for (let i=0; i < leads.length; i++) {
        let a = document.createElement(`a`);
        let li = document.createElement(`li`);
        li.textContent = leads[i];
        a.appendChild(li);
        a.href = li.textContent;
        a.target = `_blank`;
        ul_el.appendChild(a);
    }
}
