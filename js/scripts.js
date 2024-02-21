// Constants for query selectors
const myStudentId = document.getElementById('myStudentId'); // Student ID element
const customNumber = document.getElementById('customNumber'); // Custom number input
const custColorBtn = document.querySelector('.custColor'); // Custom color button
const randColorBtn = document.querySelector('.randColor'); // Random color button
const imageSelect = document.getElementById('imageSelect'); // Image select element
const images = document.getElementById('images'); // Image display element

// Function to change background color based on user input and add student ID
function customBgchangeColors() {
    const inputValue = parseInt(customNumber.value); // Input number value
    myStudentId.textContent = "My Student ID: " + 200556051; // Set student ID text
    document.body.style.backgroundColor = getColor(inputValue); // Change background color
}

// Function to set random background color
function setRandomBackgroundColor() {
    myStudentId.textContent = "My Student ID: " + 200556051; // Set student ID text
    const randomDigitValue = Math.floor(Math.random() * 100) + 1; // Generate random number
    customNumber.placeholder = randomDigitValue; // Set random number as placeholder
    document.body.style.backgroundColor = getColor(randomDigitValue); // Change background color
}

// Function to populate select list options
function imgarray() {
    const imgs = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg"]; // Array of image names
    let i = 0; // Counter
    while (i < imgs.length) { // Loop through image names
        const option = document.createElement('option'); // Create option element
        option.value = imgs[i]; // Set option value
        option.textContent = imgs[i]; // Set option text
        imageSelect.appendChild(option); // Append option to select element
        i++; // Increment counter
    }
}

// Function to change displayed image
function variousImagesSelections() {
    const choosenPic = imageSelect.value; // Selected image
    images.src = "./img/" + choosenPic; // Set image source
}

// Function to get color based on input value
function getColor(value) {
    if (value < 0 || value > 100) {
        return "red";
    } else if (value < 20) {
        return "green";
    } else if (value < 40) {
        return "blue";
    } else if (value < 60) {
        return "orange";
    } else if (value < 80) {
        return "purple";
    } else {
        return "yellow";
    }
}

// Event listeners
custColorBtn.addEventListener('click', customBgchangeColors); // Click event for custom color button
randColorBtn.addEventListener('click', setRandomBackgroundColor); // Click event for random color button
imageSelect.addEventListener('change', variousImagesSelections); // Change event for image select

// Populate select list options on page load
imgarray(); // Populate select list options
