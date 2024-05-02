// LOCALSTORAGE FUNCTIE

// Functie om het formulier naar localstorage op te slaan
function saveForm() {
    // Ophalen van alle inputs in het formulier
    const formInputs = document.querySelectorAll("input");
    
    // Loop door elke input
    formInputs.forEach(input => {
        // Sla de keuze van radio-buttons op
        if (input.type === "radio" && input.checked) {
            localStorage.setItem(input.name, input.value);
        } 
        // Sla de ingevulde waarde van andere inputs op
        else if (input.type !== "radio") {
            localStorage.setItem(input.name, input.value);
        }
    });
}

// Functie om het formulier vanuit localstorage op te halen
function loadForm() {
    // Ophalen van alle inputs in het formulier
    const formInputs = document.querySelectorAll("input");
    
    // Loop door elke input
    formInputs.forEach(input => {
        // Laden van opgeslagen gegevens indien beschikbaar
        if (localStorage.getItem(input.name)) {
            // Voor radio-buttons, controleer en vink aan indien opgeslagen waarde overeenkomt
            if (input.type === "radio") {
                if (localStorage.getItem(input.name) === input.value) {
                    input.checked = true;
                }
            } 
            // Voor andere input types (text, etc.), laad de opgeslagen waarde in
            else {
                input.value = localStorage.getItem(input.name);
                // Verwijder de 'input-untouched' klasse zodat de validatie-styling zichtbaar blijft na herladen
                input.classList.remove("input-untouched");
            }
        }
    });
}

// Bij het laden van de pagina (onload), laad opgeslagen formuliergegevens
window.onload = function() {
    loadForm();
};

// localStorage.clear(); // Dit is uitgecommentarieerd om onbedoeld verwijderen van opgeslagen gegevens te voorkomen
