document.querySelectorAll(".register-btn").forEach(btn => {
  btn.onclick = () => console.log("User clicked register");
});

document.querySelector("#categoryFilter").onchange = (e) => {
  console.log(`Filter by: ${e.target.value}`);
};

document.addEventListener("keydown", (e) => {
  console.log(`Key pressed: ${e.key}`);
});
