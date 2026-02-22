
function showMessage() {
    document.getElementById("welcomeMessage").innerHTML =
        "Thank you for visiting my portfolio!";
}


document.addEventListener("DOMContentLoaded", function () {
    let dateElement = document.getElementById("date");
    if (dateElement) {
        let today = new Date();
        dateElement.innerHTML = "Today's Date: " + today.toDateString();
    }
});


function showScene() {
    let scene = document.getElementById("sceneText");

    if (scene.innerHTML === "") {
        scene.innerHTML =
            "Bong-soon lifted the heavy object easily. " +
            "Min-hyuk looked at her and smiled, 'You're the strongest woman I know… " +
            "but your heart is even stronger. " +
            "She blushed and shyly looked away.";
    } else {
        scene.innerHTML = "";
    }
}