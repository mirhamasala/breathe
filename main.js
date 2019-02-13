// Select input elements
colors = document.querySelectorAll(".color-pickers input");

// Set CSS variables to color values you get back
function updateColors () {
    document.documentElement.style.setProperty(`--${this.name}`, this.value);
}

// Add event listeners on color pickers
colors.forEach(color => color.addEventListener("click", updateColors));
colors.forEach(color => color.addEventListener("change", updateColors));
