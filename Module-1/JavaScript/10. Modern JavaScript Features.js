const register = (name = "Guest") => console.log("Welcome,", name);
register();
const event = { name: "Tech Meetup", location: "Hall 1" };
// Destructuring 
const { name, location } = event;
let attendeeCount = 0;
attendeeCount++;
console.log("Attendee Count:", attendeeCount);
const originalList = ["A", "B"];
//Spread Operator
const clonedList = [...originalList, "C"];
console.log(clonedList);
