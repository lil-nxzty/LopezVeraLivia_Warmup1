let sceneNumber = 1;
document.getElementById("advance").addEventListener("click", advanceScene);
function advanceScene() {
    sceneNumber++;
    if (sceneNumber === 2) {
        document.getElementById("img1").src = "forest2.jpg";
        document.getElementById("para").innerText = "You move deeper in. The trees close around you. The light grows thin. Jamie encourages you to seek the One Piece.";
    }
    else if (sceneNumber === 3){
        document.getElementById("img1").src = "forest3.jpg";
        document.getElementById("para").innerText = "You have reached the heart of the forest. It is very quiet here. Jiya sees a treasure in the center of the grove.";
    }
    else {
        document.getElementById("endofpath").classList.remove("hidden");
        document.getElementById("advance").disabled = true;
    }
}