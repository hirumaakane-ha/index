// Open on visit.

alert("Welcome to HA's Web Development Playground. There's not much here.")


// The scripts

function WelcomeFunction() {
    var visitor = prompt("Please enter your name. Because. Reasons...", "Ted is my daddy")
    if (visitor == null) {
        document.getElementById("returnmessage").innerHTML =
        "Hey, I did say for whatever reasons but it is mandatory.";
    }
    else {
        document.getElementById("returnmessage").innerHTML = "Welcome to " + document.title + ", " + visitor + "."; 
    }
}

WelcomeFunction();

// Another scripts to repeat the user input