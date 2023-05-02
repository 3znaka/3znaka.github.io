// Define an array with the names of your audio files
var audioFiles = ["n01.mp3", "n02.mp3", "n03.mp3", "n04.mp3", "n05.mp3", "n06.mp3", "n07.mp3", "n08.mp3", "n09.mp3", "n10.mp3"];

// Keep track of the currently playing audio
var currentAudio = null;

// Function to get a random number between min and max
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to play a random audio file
function playRandomAudio() {
    // Stop any previously playing audio
    stopAudio();

    // Get a random audio file name from the array
    var randomIndex = getRandomNumber(0, audioFiles.length - 1);
    var randomAudioFile = audioFiles[randomIndex];

    // Create a new Audio object with the random audio file
    var audio = new Audio(randomAudioFile);

    // Wait for the audio to load before setting the starting time
    audio.addEventListener('loadedmetadata', function() {
        // Check that the duration is a finite number before setting the starting time
        if (isFinite(audio.duration)) {
            // Set a random starting time for the audio file
            var randomStartTime = getRandomNumber(0, audio.duration);
            audio.currentTime = randomStartTime;
        }
        // Play the audio file
        audio.play();
    });

    // Set the current audio to the new Audio object
    currentAudio = audio;
}

// Function to stop any currently playing audio
function stopAudio() {
    if (currentAudio !== null) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
        currentAudio = null;
    }
}

// Function to update the volume of the audio
function updateVolume(volume) {
    if (currentAudio !== null) {
        currentAudio.volume = volume / 100;
    }
}