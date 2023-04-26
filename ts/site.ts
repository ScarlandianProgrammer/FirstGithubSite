// making a window.onload to attach a click event
window.onload = function() {
    let submitButton = document.getElementById("submit");
    submitButton.onclick = submission;
}

function submission() {
    let userExperience:number = <number>document.getElementById("experience").value;
    if (userExperience < 3) {
        alert("That's uncalled for, cretan.");
    } else if (userExperience < 7) {
        alert("Understandable. At least you're honest.");
    } else {
        alert("You don't have to lie to me, I know it wasn't that good...");
    }
    document.getElementById("form").reset();
}