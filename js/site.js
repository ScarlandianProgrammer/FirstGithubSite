window.onload = function () {
    let submitButton = document.getElementById("submit");
    submitButton.onclick = submission;
};
function submission() {
    let userExperience = document.getElementById("experience").value;
    if (userExperience < 3) {
        alert("That's uncalled for, cretan.");
    }
    else if (userExperience < 7) {
        alert("Understandable. At least you're honest.");
    }
    else {
        alert("You don't have to lie to me, I know it wasn't that good...");
    }
    document.getElementById("form").reset();
}
