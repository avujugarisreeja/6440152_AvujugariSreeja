console.log("Submitting form...");

// Use breakpoints in browser DevTools
fetch("https://mockapi.io/register", {
  method: "POST",
  body: JSON.stringify({ name: "Test" })
})
.then(res => res.json())
.then(data => console.log(data));
