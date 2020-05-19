const reset_button_CN = document.querySelector(".reset_button");


function handleResetClick() {
    localStorage.clear("name");
    window.location.reload();
}

function init() {
    reset_button_CN.addEventListener("click", handleResetClick)
}
init();