document.getElementById("submitBtn").addEventListener("click", function() {
  const name = document.getElementById("nameInput").value.trim();

  if (name) {
    alert(`Hello, my name is ${name}`);
  } else {
    alert("Please enter your name!");
  }
});
