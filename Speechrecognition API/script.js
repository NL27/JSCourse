const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

let recognition = new SpeechRecognition();

let currentLanguage = 'en-US';
recognition.lang = currentLanguage;
recognition.continuous = true; // keeps listening continuously
recognition.interimResults = true; // shows interim results

// Function to create a new recognition instance
function createRecognition() {
    recognition = new SpeechRecognition();
    recognition.lang = currentLanguage;
    recognition.continuous = true;
    recognition.interimResults = true;
    
    // Re-attach event handlers
    recognition.onresult = handleResult;
    recognition.onerror = handleError;
    recognition.onstart = handleStart;
    recognition.onend = handleEnd;
}

// Event handlers as separate functions so we can reattach them
function handleResult(event) {
    let interimTranscript = '';
    
    for (let i = event.resultIndex; i < event.results.length; i++) {
        const transcript = event.results[i][0].transcript;
        if (event.results[i].isFinal) {
            finalTranscript += transcript + ' ';
        } else {
            interimTranscript += transcript;
        }
    }
    
    transcript.textContent = finalTranscript + interimTranscript;
}

function handleError(event) {
    console.error('Speech recognition error:', event.error);
    transcript.textContent = finalTranscript + '\n[Error: ' + event.error + ']';
}

function handleStart() {
    isRunning = true;
    updateButtonStates();
}

function handleEnd() {
    isRunning = false;
    
    // If we're waiting to continue, create a new instance and start it
    if (waitingToContinue) {
        waitingToContinue = false;
        // Wait a bit to ensure the old instance is fully cleaned up
        setTimeout(() => {
            createRecognition();
            try {
                recognition.start();
            } catch (e) {
                console.log('Error starting recognition after continue:', e);
            }
        }, 100);
        updateButtonStates();
        return;
    }
    
    // Only restart if not paused and not stopped
    if (!isPaused && !isStopped) {
        // If not paused and not stopped, restart recognition
        try {
            recognition.start();
        } catch (e) {
            console.log('Recognition already started or error:', e);
        }
    }
    updateButtonStates();
}

// Attach initial event handlers
recognition.onresult = handleResult;
recognition.onerror = handleError;
recognition.onstart = handleStart;
recognition.onend = handleEnd;

const startBtn = document.getElementById('startBtn');
const pauseBtn = document.getElementById('pauseBtn');
const stopBtn = document.getElementById('stopBtn');
const transcript = document.getElementById('transcript');
const languageToggle = document.getElementById('languageToggle');
const recordingIndicator = document.getElementById('recordingIndicator');
const pausedIndicator = document.getElementById('pausedIndicator');
const stoppedIndicator = document.getElementById('stoppedIndicator');
const downloadBtn = document.getElementById('downloadBtn');

let isPaused = false;
let isRunning = false;
let isStopped = true; // Start in stopped state
let finalTranscript = '';
let waitingToContinue = false; // Flag to track if we're waiting to continue after pause


function updateButtonStates() {
    // Remove active class from all buttons
    startBtn.classList.remove('active');
    pauseBtn.classList.remove('active');
    stopBtn.classList.remove('active');
    
    // Hide all indicators by default
    recordingIndicator.classList.remove('active');
    pausedIndicator.classList.remove('active');
    stoppedIndicator.classList.remove('active');
    
    const hasTranscript = transcript.textContent.trim().length > 0;
    
    if (!isRunning && !isPaused && isStopped) {
        // Stopped state
        startBtn.disabled = false;
        // Always show "Start New Recording" when stopped
        startBtn.textContent = 'Start New Recording';
        pauseBtn.disabled = true;
        stopBtn.disabled = true;
        // Show stopped indicator only if there's transcript (i.e., a recording was stopped)
        if (hasTranscript) {
            stoppedIndicator.classList.add('active');
        }
        // Enable download button only when stopped and has transcript
        downloadBtn.disabled = !hasTranscript;
    } else if (isRunning && !isPaused) {
        // Running state
        isStopped = false;
        startBtn.disabled = true;
        startBtn.textContent = 'Running';
        pauseBtn.disabled = false;
        pauseBtn.classList.add('active');
        stopBtn.disabled = false;
        // Show recording indicator
        recordingIndicator.classList.add('active');
        // Disable download button when running
        downloadBtn.disabled = true;
    } else if (isPaused) {
        // Paused state
        isStopped = false;
        startBtn.disabled = false;
        startBtn.textContent = 'Continue Recording';
        startBtn.classList.add('active');
        pauseBtn.disabled = true;
        stopBtn.disabled = false;
        // Show paused indicator
        pausedIndicator.classList.add('active');
        // Disable download button when paused
        downloadBtn.disabled = true;
    }
}

startBtn.addEventListener('click', () => {
    isPaused = false;
    isStopped = false;
    
    // If starting a new recording (button says "Start New Recording"), clear everything
    if (startBtn.textContent === 'Start New Recording') {
        finalTranscript = '';
        transcript.textContent = '';
        // Create a fresh recognition instance for new recording
        createRecognition();
        try {
            recognition.start();
        } catch (e) {
            console.log('Recognition already started:', e);
        }
    } else {
        // If continuing, always wait a bit and create a fresh instance
        // This ensures any buffered audio is cleared and prevents duplication
        waitingToContinue = true;
        if (isRunning) {
            recognition.stop();
            // The onend handler will create a new instance
        } else {
            // If not running, still wait a bit to ensure clean state
            setTimeout(() => {
                waitingToContinue = false;
                createRecognition();
                try {
                    recognition.start();
                } catch (e) {
                    console.log('Recognition already started:', e);
                }
            }, 200);
        }
    }
});

pauseBtn.addEventListener('click', () => {
    isPaused = true;
    recognition.stop();
    // Clear any interim results from the transcript display, keep only final results
    // This prevents duplication when continuing
    transcript.textContent = finalTranscript;
    updateButtonStates();
});

stopBtn.addEventListener('click', () => {
    // Set stopped state BEFORE calling stop() so onend handler knows not to restart
    isPaused = false;
    isRunning = false;
    isStopped = true; // Mark as stopped
    waitingToContinue = false; // Cancel any pending continue operation
    
    // Try to stop recognition (works whether running or already paused/stopped)
    try {
        recognition.stop();
    } catch (e) {
        // Recognition might already be stopped (when paused), that's fine
        // Just continue with updating the state
    }
    
    // Keep the transcript text - don't clear it
    // Update finalTranscript to current transcript content for consistency
    finalTranscript = transcript.textContent.trim();
    
    // Update button states immediately since we might not get onend event if already stopped
    updateButtonStates();
});

languageToggle.addEventListener('change', (e) => {
    const wasRunning = isRunning;
    
    // Stop recognition if it's running
    if (isRunning) {
        recognition.stop();
        isRunning = false;
        isPaused = true;
    }
    
    // Change language
    currentLanguage = e.target.checked ? 'de-DE' : 'en-US';
    
    // Create a new recognition instance with the new language
    createRecognition();
    
    // Restart recognition if it was running
    if (wasRunning) {
        setTimeout(() => {
            isPaused = false;
            try {
                recognition.start();
            } catch (err) {
                console.log('Error restarting recognition:', err);
            }
        }, 100);
    }
    
    updateButtonStates();
});

downloadBtn.addEventListener('click', () => {
    const transcriptText = transcript.textContent.trim();
    
    if (!transcriptText) {
        return;
    }
    
    // Create a blob with the transcript text
    const blob = new Blob([transcriptText], { type: 'text/plain' });
    
    // Create a download link
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    
    // Generate filename with timestamp
    const now = new Date();
    const timestamp = now.toISOString().replace(/[:.]/g, '-').slice(0, -5);
    const language = currentLanguage === 'de-DE' ? 'German' : 'English';
    a.download = `speech-transcript-${language}-${timestamp}.txt`;
    
    // Trigger download
    document.body.appendChild(a);
    a.click();
    
    // Clean up
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
});

// Update download button state when transcript changes
const transcriptObserver = new MutationObserver(() => {
    updateButtonStates();
});

transcriptObserver.observe(transcript, { childList: true, characterData: true, subtree: true });

// Initialize button states
updateButtonStates();