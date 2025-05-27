const events = [
  { name: "Yoga Session", date: "2025-07-01", seats: 0 },
  { name: "Art Fair", date: "2025-08-10", seats: 10 }
];

const today = new Date("2025-06-26");

events.forEach(event => {
  const eventDate = new Date(event.date);
  if (eventDate > today && event.seats > 0) {
    console.log(`Upcoming: ${event.name}`);
  } else {
    console.log(`Not valid: ${event.name}`);
  }
});

function register(event) {
  try {
    if (event.seats <= 0) throw new Error("No seats available");
    event.seats--;
    console.log("Registration successful!");
  } catch (error) {
    console.error(error.message);
  }
}
