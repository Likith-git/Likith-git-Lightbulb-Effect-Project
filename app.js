// Select the bulb element
const bulb = document.getElementById('bulb');

// Add click event listener to toggle the bulb on and off
bulb.addEventListener('click', () => {
    // Toggle the bulb class between "on" and "off"
    if (bulb.classList.contains('bulb-off')) {
        bulb.classList.remove('bulb-off');
        bulb.classList.add('bulb-on');
    } else {
        bulb.classList.remove('bulb-on');
        bulb.classList.add('bulb-off');
    }
});
