// Using .then() and .catch()
fetch("https://example.com/events.json")
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));

// Async/Await with loading spinner
async function fetchEvents() {
  document.getElementById("spinner").style.display = "block";
  try {
    const res = await fetch("https://example.com/events.json");
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.error(err);
  } finally {
    document.getElementById("spinner").style.display = "none";
  }
}
