// FUNCTIE WAARDOOR INPUT VELDEN PAS VALID OF INVALID STYLING KRIJGEN ALS JE BEGINT MET TYPEN
document.querySelector("form").addEventListener("input", saveForm);

const inputFields = document.querySelectorAll("input");
inputFields.forEach(inputField => {
    inputField.addEventListener("input", function() {
        inputField.classList.remove("input-untouched");
    });
});

// FUNCTIE WAARDOOR JE PAS NAAR HET VOLGENDE ONDERDEEL KAN ALS JE ALLE VERPLICHTE INPUT VELDEN HEBT INGEVULD
function validateForm(currentPartId, nextPartId) {
    const fields = document.querySelectorAll(`${currentPartId} input[required]`);
    for (let i = 0; i < fields.length; i++) {
        const field = fields[i];
        if (field.value.trim() === "") {
            alert("Vul alle verplichte velden in voordat u verdergaat.");
            return false; 
        }
    }
    window.location.href = nextPartId;
    return true;
}

function setupNavigation(currentPartId, nextPartId) {
    const nextButton = document.querySelector(`${currentPartId} a[href="${nextPartId}"]`);
    nextButton.addEventListener("click", function(event) {
        event.preventDefault(); 
        if (validateForm(currentPartId, nextPartId)) {
            window.location.href = nextPartId;
        }
    });
}

setupNavigation("#eersteOnderdeel", "#tweedeOnderdeel");
setupNavigation("#tweedeOnderdeel", "#derdeOnderdeel");
setupNavigation("#derdeOnderdeel", "#vierdeOnderdeel");
setupNavigation("#vierdeOnderdeel", "#vijfdeOnderdeel");

// FUNCTIE OM VELDEN OPEN TE KLAPPEN
const openAccordionButtons = document.querySelectorAll(".open-accordion-button");
const closeAccordionButtons = document.querySelectorAll(".close-accordion-button");
const accordions = document.querySelectorAll(".accordion");

openAccordionButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        openAccordion(accordions[index]);
    });
});

closeAccordionButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        closeAccordion(accordions[index]);
    });
});

function openAccordion(accordion) {
    accordion.classList.add("open-accordion");
}

function closeAccordion(accordion) {
    accordion.classList.remove("open-accordion");
}


