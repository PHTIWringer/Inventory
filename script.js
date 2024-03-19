/* SET DATE AND TIME */

function updateDateTime() {
  let now = new Date();
  let dateTimeString = now.toLocaleString(); // Converts to local date/time string
  document.querySelector(".date-time").textContent = dateTimeString;
}

// Update the date/time every second
setInterval(updateDateTime, 1000);

// Initialize on page load
updateDateTime();

/* GUI */

document.querySelector(".menu-header").addEventListener("click", function () {
  document.getElementById("dynamic-content").innerHTML =
    "<h2>Inventory</h2><p>Inventory details...</p>";
});

document.querySelector(".list-button").addEventListener("click", function () {
  document.getElementById("dynamic-content").innerHTML =
    "<h2>List</h2><p>List details...</p>";
});
