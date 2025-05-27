const eventContainer = document.querySelector("#events");

function displayEvent(event) {
  const card = document.createElement("div");
  card.textContent = `${event.name} - ${event.date}`;
  eventContainer.appendChild(card);
}

function updateUI(event) {
  // Update text or elements
}
