function openForm() {
  document.getElementById("popup").style.display = "block";
}

function closeForm() {
  document.getElementById("popup").style.display = "none";
}

document.getElementById("open-button").addEventListener("click", openForm);
document.getElementById("close-button").addEventListener("click", closeForm);
