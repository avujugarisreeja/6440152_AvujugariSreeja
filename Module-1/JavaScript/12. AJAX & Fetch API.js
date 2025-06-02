function submitData(user) {
  fetch("https://mockapi.io/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user)
  })
    .then(res => res.json())
    .then(data => {
      console.log("Registered!", data);
    })
    .catch(() => {
      console.error("Registration failed.");
    });

  setTimeout(() => {
    console.log("Response simulated after delay");
  }, 2000);
}
