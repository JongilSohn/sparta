const form = document.querySelector(".js_form");
const name_data = form.querySelector("input");

const greetings = document.querySelector(".js_greetings");

const localStorage_user = "name";
const showing_class="showing"
const hiding_class="hiding";


function handleSubmit(evnet){
    event.preventDefault();
    const real_name = name_data.value;
    local_save(real_name);
    form_change(real_name);
}

function local_save(text) {
    localStorage.setItem(localStorage_user, text);
}

function form_change (name) {
    form.classList.remove(showing_class);
    form.classList.add(hiding_class);
    greetings.classList.add(showing_class);
    greetings.innerText = `Welcome to ${name} !`;
}

function ask_name () {
    form.classList.add(showing_class);
    form.addEventListener("submit", handleSubmit);
 
}

function load_name(){
    const current_user = localStorage.getItem(localStorage_user);

    
    if (current_user ===null) {
        ask_name();
    }
    else {
        form_change(current_user);
    }
}


function init (){
    load_name();
}
init();