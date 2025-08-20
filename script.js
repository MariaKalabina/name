document.getElementById("submitBtn").addEventListener("click", function() {
  const name = document.getElementById("nameInput").value.trim();

  if (name) {
    alert(`${name}`);
  } else {
    alert("Please enter your name!");
  }
});
