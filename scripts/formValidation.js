const inputFields = document.querySelectorAll("input");
inputFields.forEach(inputField => {
    inputField.addEventListener("input", function() {
        inputField.classList.remove("input-untouched");
    });
});

