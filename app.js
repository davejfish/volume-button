
// state
let volume = 10;

// component
    // define and grab DOM elements
    // display functions
    // subscribe to events
        // event handlers - what needs to happen?
        // logic and calculations
        // state update
        // re-display components
const volumeBox = document.querySelector('section');
const [down, up] = volumeBox.querySelectorAll('button');
const volumeDisplay = volumeBox.querySelector('span');

function updateVolume() {
    volumeDisplay.textContent = volume;
}

down.addEventListener('click', () => {
    if (volume < 1) {
        return;
    } 
    else {
        volume--;
        updateVolume();
    }
});

up.addEventListener('click', () => {
    if (volume >= 20) {
        return;
    } 
    else {
        volume++;
        updateVolume();
    }
});

// page load actions
updateVolume();