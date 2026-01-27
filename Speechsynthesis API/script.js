const synth = window.speechSynthesis;
const voiceSelect = document.getElementById('voice-select');
let voices;

// Allowed voices list
const allowedVoices = [
    // 'Daniel',      // English United Kingdom
    // 'Gordon',      // en-AU
    // 'Karen',       // en-AU
    // 'Nicky',       // en-US
    'Vernon',      // en-US (default)
    'Martin'       // de-DE
];

function addVoicestoSelect() {
    const allVoices = synth.getVoices();
    
    // Filter to only allowed voices
    voices = allVoices.filter(voice => {
        // Exclude French Daniel voice
        if (voice.name.toLowerCase().includes('daniel') && voice.lang.toLowerCase().startsWith('fr')) {
            return false;
        }
        
        return allowedVoices.some(allowedName => 
            voice.name.toLowerCase().includes(allowedName.toLowerCase())
        );
    });
    
    // Clear existing options
    voiceSelect.innerHTML = '';
    
    let defaultVoiceIndex = -1;
    
    for (let i = 0; i < voices.length; i++) {
        const option = document.createElement('option');
        option.textContent = `${voices[i].name} -- ${voices[i].lang}`;
        
        // Set Vernon as default
        if (voices[i].name.toLowerCase().includes('vernon')) {
            defaultVoiceIndex = i;
            option.textContent += ' -- DEFAULT';
        }

        option.setAttribute('data-lang', voices[i].lang);
        option.setAttribute('data-name', voices[i].name);
        voiceSelect.appendChild(option);
    }
    
    // Set Vernon as selected by default
    if (defaultVoiceIndex >= 0) {
        voiceSelect.selectedIndex = defaultVoiceIndex;
    }
}

function onSubmit(e) {
    e.preventDefault();

    const textInput = document.getElementById('text-input');

    const utterThis = new SpeechSynthesisUtterance(textInput.value);

    const selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
    for (let i = 0; i < voices.length; i++) {
        if (voices[i].name === selectedOption) {
            utterThis.voice = voices[i];
            break;
        }
    }
    synth.speak(utterThis);
}

addVoicestoSelect();
if(speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = addVoicestoSelect;
}

document.getElementById('text-form').addEventListener('submit', onSubmit);