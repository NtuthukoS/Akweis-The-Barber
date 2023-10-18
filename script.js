// Function to generate available time slots
function generateTimeSlots() {
    const timeSelect = document.getElementById("time");
    
    for (let hour = 10; hour <= 18; hour++) {
        for (let minutes = 0; minutes < 60; minutes += 30) {
            const formattedTime = `${hour < 10 ? "0" : ""}${hour}:${minutes === 0 ? "00" : minutes}`;
            const option = document.createElement("option");
            option.value = formattedTime;
            option.text = formattedTime;
            timeSelect.appendChild(option);
        }
    }
}

// Function to close the overlay
function closeOverlay() {
    const overlay = document.getElementById("overlay");
    overlay.style.display = "none";
}

// Function to open the overlay
function openOverlay() {
    const overlay = document.getElementById("overlay");
    overlay.style.display = "block";
    generateTimeSlots();
}

document.addEventListener("DOMContentLoaded", function () {
    const openCalendarButtons = document.querySelectorAll(".open-calendar");

    openCalendarButtons.forEach((button) => {
        button.addEventListener("click", (e) => {
            e.preventDefault();
            openOverlay();
        });
    });
});
