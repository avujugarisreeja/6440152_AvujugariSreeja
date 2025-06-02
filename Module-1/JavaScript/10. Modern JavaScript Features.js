// Using const for constants
const register = (name = "Guest") => console.log("Welcome,", name);
register();
// Using const for objects
const event = { name: "Tech Meetup", location: "Hall 1" };
// Destructuring with const
const { name, location } = event;
// Using let for a variable that might change
let attendeeCount = 0;
attendeeCount++;
console.log("Attendee Count:", attendeeCount);
// Using const and spread operator
const originalList = ["A", "B"];
const clonedList = [...originalList, "C"];
console.log(clonedList);
