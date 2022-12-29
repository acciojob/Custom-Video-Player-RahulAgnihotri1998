const video = document.querySelector('.player__video');
const progressBar = document.querySelector('.progress');
const progressFilled = document.querySelector('.progress__filled');
const playButton = document.querySelector('.player__button.toggle');
const volumeInput = document.querySelector('.player__slider[name="volume"]');
const playbackSpeedInput = document.querySelector('.player__slider[name="playbackRate"]');
const skipButtons = document.querySelectorAll('.player__button[data-skip]');

// Toggle play/pause
function togglePlay() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

// Update play/pause button
function updateButton() {
  playButton.textContent = this.paused ? '►' : '❚ ❚';
}

// Update progress bar
function updateProgress() {
  progressFilled.style.flexBasis = `${(this.currentTime / this.duration) * 100}%`;
}

// Set volume
function setVolume() {
  video.volume = this.value;
}

// Set playback speed
function setPlaybackSpeed() {
  video.playbackRate = this.value;
}

// Skip video
function skip() {
  video.currentTime += parseFloat(this.dataset.skip);
}

// Handle progress bar click
function handleProgressClick(e) {
  const time = (e.offsetX / progressBar.offsetWidth) * video.duration;
  video.currentTime = time;
}

// Event listeners
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', updateProgress);
volumeInput.addEventListener('input', setVolume);
playbackSpeedInput.addEventListener('input', setPlaybackSpeed);
skipButtons.forEach(button => button.addEventListener('click', skip));
progressBar.addEventListener('click', handleProgressClick);
