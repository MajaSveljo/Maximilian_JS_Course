// console.log("Sending analytics...");

// this runs a function every x miliseconds
const intervalId = setInterval(() => {
  console.log("sending analytics data...");
}, 2000);

document.getElementById("stop-analytics-btn").addEventListener("click", () => {
  clearInterval(intervalId);
});
