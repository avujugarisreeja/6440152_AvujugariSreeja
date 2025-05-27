function addEvent(name, date, category, seats) {
  return { name, date, category, seats };
}

function registerUser(event) {
  if (event.seats > 0) {
    event.seats--;
    console.log("User registered!");
  }
}

function filterEventsByCategory(events, category) {
  return events.filter(e => e.category === category);
}

// Closure example
function categoryTracker(category) {
  let count = 0;
  return function () {
    count++;
    console.log(`${count} registrations for ${category}`);
  };
}
