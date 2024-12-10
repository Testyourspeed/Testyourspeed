// Select the button element
const colorButton = document.getElementById('colorButton');

// Add a click event listener to the button
colorButton.addEventListener('click', () => {
    // Generate a random color
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    
    // Change the background color of the body
    document.body.style.backgroundColor = randomColor;
});
