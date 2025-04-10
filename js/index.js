function spanErrorShow(option, input) {
    switch (option) { // Showing span or classes by key and input object
        case 1:
            input.classList.add("input-error");    
        
            let span1 = document.getElementById("span-1");
            span1.classList.remove("hidden");
            span1.classList.add("visible");
            break;
        case 2:
            input.classList.add("input-error");

            let span2 = document.getElementById("span-2");
            span2.classList.remove("hidden");
            span2.classList.add("visible");
            break;
        case 3:
            input.classList.add("input-error");

            let span3 = document.getElementById("span-3");
            span3.classList.remove("hidden");
            span3.classList.add("visible");
            break;
        case 4:
            let span4 = document.getElementById("span-4");
            span4.classList.remove("hidden");
            span4.classList.add("visible");
            break;
        case 5:
            input.classList.add("input-error");

            let span5 = document.getElementById("span-5");
            span5.classList.remove("hidden");
            span5.classList.add("visible");
            break;
        case 6:
            let span6 = document.getElementById("span-6");
            span6.classList.remove("hidden");
            span6.classList.add("visible");
            break;
    }
}

function spanErrorHide(option, input) {
    switch (option) { // Hiding span or classes by key and input object
        case 1:
            input.classList.remove("input-error");    
        
            let span1 = document.getElementById("span-1");
            span1.classList.add("hidden");
            span1.classList.remove("visible");
            break;
        case 2:
            input.classList.remove("input-error");

            let span2 = document.getElementById("span-2");
            span2.classList.add("hidden");
            span2.classList.remove("visible");
            break;
        case 3:
            input.classList.remove("input-error");

            let span3 = document.getElementById("span-3");
            span3.classList.add("hidden");
            span3.classList.remove("visible");
            break;
        case 4:
            let span4 = document.getElementById("span-4");
            span4.classList.add("hidden");
            span4.classList.remove("visible");
            break;
        case 5:
            input.classList.remove("input-error");

            let span5 = document.getElementById("span-5");
            span5.classList.add("hidden");
            span5.classList.remove("visible");
            break;
        case 6:
            let span6 = document.getElementById("span-6");
            span6.classList.add("hidden");
            span6.classList.remove("visible");
            break;
    }
}

function logSubmit(event) {
    event.preventDefault();

    let firstName = document.getElementById("first-name");
    let lastName = document.getElementById("last-name");
    let email = document.getElementById("email");
    let message = document.getElementById("message");
    let radios = document.querySelector('input[name="radio-group"]:checked');
    let checkbox = document.querySelector('input[name="checkbox-team"]:checked');
    // Interface array built with input properties to act dinamically in foreach and switches
    let inputsError = [
        {
            key: 1,
            input: firstName,
            boolean: firstName.value === ""
        },
        {
            key: 2,
            input: lastName,
            boolean: lastName.value === ""
        },
        {
            key: 3,
            input: email,
            boolean: !regexEmail.test(email.value)
        },
        {
            key: 4,
            input: radios,
            boolean: !radios
        },
        {
            key: 5,
            input: message,
            boolean: message.value === ""
        },
        {
            key: 6,
            input: checkbox,
            boolean: !checkbox
        }
    ];

    // Simple validation
    inputsError.forEach(obj => {
        if (obj.boolean) {
            spanErrorShow(obj.key, obj.input);
        } else {
            spanErrorHide(obj.key, obj.input)
        }
    });

    // Resetting form style and values
    const allValid = inputsError.every(valid => !valid.boolean);
    if (allValid) {
        document.getElementById("contact-us-form").reset();
        let success = document.getElementById("success-article");
        success.classList.add("visible");
    }
}

// Listener for form by submit operation
const form = document.getElementById("contact-us-form");
// Regex for an email
const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
form.addEventListener("submit", logSubmit);