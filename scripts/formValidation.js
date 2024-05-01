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
const openAccordionButtonOne = document.querySelectorAll(".open-accordion-button-1");
const closeAccordionButtonOne = document.querySelectorAll(".close-accordion-button-1");
const accordionOne = document.querySelectorAll(".accordion-1");

openAccordionButtonOne.forEach((button, index) => {
    button.addEventListener("click", () => {
        openAccordion(accordionOne[index]);
    });
});

closeAccordionButtonOne.forEach((button, index) => {
    button.addEventListener("click", () => {
        closeAccordion(accordionOne[index]);
    });
});

const openAccordionButtonTwo = document.querySelectorAll(".open-accordion-button-2");
const accordionTwo = document.querySelectorAll(".accordion-2");

openAccordionButtonTwo.forEach((button, index) => {
    button.addEventListener("click", () => {
        toggleAccordion(accordionTwo[index]);
    });
});

const openAccordionButtonThree = document.querySelectorAll(".open-accordion-button-3");
const closeAccordionButtonThree = document.querySelectorAll(".close-accordion-button-3");
const accordionThree = document.querySelectorAll(".accordion-3");

openAccordionButtonThree.forEach((button, index) => {
    button.addEventListener("click", () => {
        openAccordion(accordionThree[index]);
    });
});

closeAccordionButtonThree.forEach((button, index) => {
    button.addEventListener("click", () => {
        closeAccordion(accordionThree[index]);
    });
});

function openAccordion(accordion) {
    accordion.classList.add("open-accordion");
}

function closeAccordion(accordion) {
    accordion.classList.remove("open-accordion");
}

function toggleAccordion(accordion) {
    accordion.classList.toggle("open-accordion");
}

// FUNCTIE OM GELDIGDE DATUM IN TE VOEREN
const dateInputs = [
    "input[name=overlijdensdatum-overledende]",
    "input[name=datum-huwelijkse-of-partnerschapsvoorwaarden-overledende]",
    "input[name=datum-van-testament-notaris]",
    "input[name=datum]"
];

dateInputs.forEach((selector) => {
    const inputElement = document.querySelector(selector);
    if (inputElement) {
        const today = new Date().toISOString().split('T')[0]; 
        inputElement.max = today;
    }
});






