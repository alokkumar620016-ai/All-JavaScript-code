
const form = document.querySelector("#form")
const btn = document.querySelector("#btn")
const username = document.querySelector("#username")
const Bio = document.querySelector("#bio")
const charCount = document.querySelector("#charCount")
const checkbox = document.querySelector("#checkbox")
const country = document.querySelector("#country")
const passwordHint = document.querySelector("#passwordHint")
const password = document.querySelector("#password")
// const errorMessage = document.querySelector("#error-message")


const LIMIT = 200

charCount.textContent = `${LIMIT} Characters remaining`

function showError(input, errorMessage) {
    input.parentElement.querySelector(".error-message").textContent = errorMessage
}

function clearError(input) {
    input.parentElement.querySelector(".error-message").textContent = ""
}

function validUsername(username) {
    //check 1
    if (username.value.trim().length === 0) {
        showError(username, "Please Enter you name")
        return false
    }

    //check 2
    if (username.value.trim().length < 3) {
        showError(username, "username must be at least 3 character")
        return false
    }

    clearError(username)
    return true
}

function validPassword(password) {
    //check 1
    if (password.value.trim().length === 0) {
        showError(password, "Please Enter you password")
        return false
    }

    //check 2
    if (password.value.trim().length < 8) {
        showError(password, "password must be at least 8 character")
        return false
    }

    clearError(password)
    return true
}


function validBio(Bio) {
    //check 1
    if (Bio.value.trim().length === 0) {
        showError(Bio , "please Enter your Bio")
        return false
    }

    if (Bio.value.trim().length > 20) {
        showError (Bio , "Bio Character must be not greater than 20")
        return false
    }

    clearError(Bio)
    return true
}


form.addEventListener("submit", (e) => {
    e.preventDefault();
    // const password = document.querySelector("#password").value

    const isUsernameValid = validUsername(username);// passing username element
    const isPasswordValid = validPassword(password);// passing password element
    const isBioValid = validBio(Bio)
    if (isUsernameValid && isPasswordValid) {
        document.querySelector("h1").classList.remove("hidden")
    } else {
        document.querySelector("h1").classList.add("hidden")

    }
})



// username.addEventListener("input" , (e) => {
//     console.log(username.value);
// })

// bio.addEventListener("input", (e) => {
//     const remaining = LIMIT - bio.value.length;
//     charCount.textContent = `${remaining} characters remaining`;
// })

// username.addEventListener("change", (e) => {
//     console.log("Change event", username.value);
// })

// username.addEventListener("input", (e) => {
//     console.log("Input event", username.value);
// })

// checkbox.addEventListener("change", (e) => {
//     console.log(checkbox.checked);
// })

// country.addEventListener("change", (e) => {
//     console.log(country.value);
// })

// username.addEventListener("focus", (e) => {
//     console.log("Focus event ->");
// })

// username.addEventListener("blur", (e) => {
//     console.log("blur event ->");
// })

// password.addEventListener("focus", (e) => {
//     passwordHint.classList.remove("hidden")
// })

// password.addEventListener("blur", (e) => {
//     passwordHint.classList.add("hidden")
// })
