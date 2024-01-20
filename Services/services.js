const crops = {
    loamy: ["Wheat", "Sugarcane", "Cotton", "Jute", "Oilseeds", "Pulses", "Vegetables"],
    sandy: ["Melon", "Coconut"],
    clay: ["Paddy"],
    red: ["Rice", "Wheat", "Sugarcane", "Maize", "Groundnut", "Fruits - Mango, Orange, Citrus"],
    black: ["Cotton", "Sugarcane", "Jowar", "Cereal", "Tomatoes", "Sunflower"]
};

const waterIntake = {
    loamy: {
        "Sandy loam": "1.25-1.40",
        "Fine sandy loam": "1.50-2.00",
        "Silt loam": "2.00-2.50",
    },
    sandy: {
        "Coarse sand": "0.25-0.75",
        "Fine sand": "0.75-1.00",
        "Loamy sand": "1.10-1.20",
    },
    clay: {
        "Silty clay loam": "1.80-2.00",
        "Silty clay": "1.50-1.70",
        "Clay": "1.20-1.50",
    },
    red: {
        "Sandy red soil": "0.75-1.25",
        "Loamy red soil": "1.25-1.75",
        "Clayey red soil": "1.75-2.5",
    },
    black: {
        "Shallow black soil": "0.30",
        "Medium black soil": "0.30-1.00",
        "Deep black soil": "0.4-0.6",
    },
};

function updateCropDropdown() {
    const soilType = document.getElementById("soilType").value;
    const cropDropdown = document.getElementById("cropDropdown");
    const cropLabel = document.getElementById("cropLabel");

    // Clear existing options
    cropDropdown.innerHTML = "";

    // Add a default option
    const defaultOption = document.createElement("option");
    defaultOption.value = "";
    defaultOption.textContent = "Select Crop";
    cropDropdown.appendChild(defaultOption);

    // Populate crop dropdown based on soil selection
    crops[soilType].forEach(crop => {
        const option = document.createElement("option");
        option.value = crop;
        option.textContent = crop;
        cropDropdown.appendChild(option);
    });

    // Show crop dropdown and label
    cropDropdown.style.display = "block";
    cropLabel.style.display = "block";

    // Hide water level initially
    document.getElementById("waterLevel").style.display = "none";
    document.getElementById("selectedWaterLevel").textContent = "";
}

function updateWaterLevel() {
    const soilType = document.getElementById("soilType").value;
    const waterLevel = document.getElementById("waterLevel");
    const selectedWaterLevel = document.getElementById("selectedWaterLevel");

    // Check if soil type is selected
    if (soilType) {
        // Check if water intake data is available for the selected soil type
        if (waterIntake[soilType]) {
            const waterIntakeValues = Object.entries(waterIntake[soilType]).map(([type, range]) => `${type}: ${range} inches`).join("<br>");
            selectedWaterLevel.innerHTML = waterIntakeValues;
        } else {
            // Log an error if water intake data is not available
            console.error(`Water intake data not available for the selected soil type: ${soilType}`);
            selectedWaterLevel.textContent = "Water intake data not available for the selected soil type.";
        }
    } else {
        // Log an error if soil type is not selected
        console.error("Soil type must be selected.");
        selectedWaterLevel.textContent = "Please select a soil type.";
    }

    // Show water level
    waterLevel.style.display = "block";
}
