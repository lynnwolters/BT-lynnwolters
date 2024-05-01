// FUNCTIE OM LOCALSTORAGE OP TE SLAAN
function saveForm() {
    const formInputs = document.querySelectorAll("input");
    formInputs.forEach(input => {
        if (input.type === "radio" && input.checked) {
            localStorage.setItem(input.name, input.value);
        } else if (input.type !== "radio") {
            localStorage.setItem(input.name, input.value);
        }
    });
}

// FUNCTIE OM LOCALSTORAGE IN TE LADEN
function loadForm() {
    const formInputs = document.querySelectorAll("input");
    formInputs.forEach(input => {
        if (localStorage.getItem(input.name)) {
            if (input.type === "radio") {
                if (localStorage.getItem(input.name) === input.value) {
                    input.checked = true;
                }
            } else {
                input.value = localStorage.getItem(input.name);
                input.classList.remove("input-untouched");
            }
        }
    });
}

window.onload = function() {
    loadForm();
};

// localStorage.clear();


