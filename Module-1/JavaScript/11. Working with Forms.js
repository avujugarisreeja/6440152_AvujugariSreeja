document.querySelector("#regForm").onsubmit = function (e) {
  e.preventDefault();

  const name = this.elements["name"].value;
  const email = this.elements["email"].value;

  if (!name || !email) {
    document.querySelector("#error").textContent = "All fields required.";
    return;
  }

  console.log(`Name: ${name}, Email: ${email}`);
};
