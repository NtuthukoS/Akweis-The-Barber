// JavaScript to handle dropdown selection and auto-fill calendar
const openCalendarButtons = document.querySelectorAll(".open-calendar");
const serviceSelect = document.getElementById("service");

openCalendarButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
        const selectedBookingType = event.target.getAttribute("data-booking-type");
        let serviceOptions = []; // Initialize service options

        if (selectedBookingType === "in-store") {
            // In-Store service options
            serviceOptions = [
                "Fade (R100)",
                "Shave (R80)",
                "Dye (R120)",
                // Add other service options for in-store
            ];
        } else if (selectedBookingType === "house-call") {
            // House Call service options (prices are at least 4x)
            serviceOptions = [
                "Fade (R400+)",
                "Shave (R320+)",
                "Dye (R480+)",
                // Add other service options for house call
            ];
        }

        // Populate the service dropdown based on the selected booking type
        populateServiceOptions(serviceOptions);
    });
});

function populateServiceOptions(options) {
    const serviceSelect = document.getElementById("service");
    serviceSelect.innerHTML = "";

    options.forEach((option) => {
        const optionElement = document.createElement("option");
        optionElement.text = option;
        serviceSelect.add(optionElement);
    });


function closeOverlay() {
    const overlay = document.getElementById("overlay");
    overlay.style.display = "none";
}
}