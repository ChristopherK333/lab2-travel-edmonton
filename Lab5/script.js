document.addEventListener("DOMContentLoaded", () => {

    const inputs = document.querySelectorAll("#username, #password, #email"); //creates a query of all the id elements, username,password and email in the DOM

    inputs.forEach((input) => {

        input.addEventListener("focus", () => {
            input.style.backgroundColor = "#fffae0";
        });

        input.addEventListener("blur", () => {
            input.style.backgroundColor = "white";
        });

    });
 
    const form = document.getElementById("signup-form");
    const username = document.getElementById("username");
    const password = document.getElementById("password");
    const email = document.getElementById("email");
    const terms = document.getElementById("terms");
    const errorUsername = document.getElementById("error-username");
    const errorEmail = document.getElementById("error-email");
    const errorPassword = document.getElementById("error-password");
    const errorTerms = document.getElementById("error-terms");
    //once we grab everything we might need we can use the submit event listener to check the fields all at once
    form.addEventListener("submit", function(e){
        e.preventDefault(); //prof says we need this
        let isValid = true; //make a flag to check if any of the fields fail

        if(username.value.trim()===""){
            errorUsername.textContent = "Username is required";//puts the text within the span element if invalid
            errorUsername.style.display="block"; //style adds an inline css rule to this element
            username.classList.add("error-border"); //since we have an error border we can add this to our username class showing it if its invalid. 
            isValid = false;
        } else {   
            errorUsername.textContent = ""; 
        errorUsername.style.display = "none";
        username.classList.remove("error-border");

        }

        if(email.value.trim()==="" || !email.value.trim().includes("@") || !email.value.trim().includes(".")){
            errorEmail.textContent = "Enter a valid email address";
            errorEmail.style.display = "block";
            email.classList.add("error-border");
            isValid = false;

        }else {
        errorEmail.textContent = "";
        errorEmail.style.display = "none";
        email.classList.remove("error-border");
        }

    if (password.value.length < 8) {
        errorPassword.textContent = "Password must be at least 8 characters";
        errorPassword.style.display = "block";
        password.classList.add("error-border");
        isValid = false;
    } else {
        errorPassword.textContent = "";
        errorPassword.style.display = "none";
        password.classList.remove("error-border");
    }

    if (!terms.checked) {
        errorTerms.textContent = "You must accept the terms";
        errorTerms.style.display = "block";
        isValid = false;
    } else {
        errorTerms.textContent = "";
        errorTerms.style.display = "none";
    }


    if (isValid) {
        alert("Registration successful!");
    }


    })



    const thumbnail = document.querySelectorAll(".thumb")
    const caption = document.getElementById("image-caption")

    thumbnail.forEach((thumb) => {
    thumb.addEventListener("click", function() {
        selectTile(this);
    });


    thumb.addEventListener("keydown", function(e) {
        if (e.key === "Enter") {
            selectTile(this);
        }
    });
});

function selectTile(selectedThumb) {
    thumbnail.forEach((thumb) => {
        thumb.classList.remove("expanded");
    });

    selectedThumb.classList.add("expanded");

    const cityName = selectedThumb.dataset.city || selectedThumb.querySelector("img").alt;
    caption.textContent = `You selected: ${cityName}`;
}


});
