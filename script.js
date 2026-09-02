const kickAudio = document.querySelector('.js-kick-audio');
const snareAudio = document.querySelector('.js-snare-audio');
const clapAudio = document.querySelector('.js-clap-audio');
const hatAudio = document.querySelector('.js-hat-audio');

const kickBtn = document.querySelector('.js-btn-kick');
const snareBtn = document.querySelector('.js-btn-snare');
const clapBtn = document.querySelector('.js-btn-clap');
const hatBtn = document.querySelector('.js-btn-hat');

let currentAudio = null;

kickBtn.addEventListener('click', () => {
    console.log('play kick');
    playAudio('kick');
});

snareBtn.addEventListener('click', () => {
    console.log('play snare');
    playAudio('snare');
});

clapBtn.addEventListener('click', () => {
    console.log('play clap');
    playAudio('clap');
});

hatBtn.addEventListener('click', () => {
    console.log('play hat');
    playAudio('hat');
});

document.addEventListener('keydown', (event) => {
    console.log(event.key);

    if (event.key === 'k') {
        playAudio('kick');
        buttonGlow('k');
    } 
    if (event.key === 's') {
        playAudio('snare');
        buttonGlow('s');
    }
    if (event.key === 'c') {
        playAudio('clap');
        buttonGlow('c');
    }
    if (event.key === 'h') {
        playAudio('hat');
        buttonGlow('h');
    }
}); 

function triggerSound(audioElement) {
    if (audioElement) {
        const clone = audioElement.cloneNode();
        clone.play();
    }
}

function playAudio(button) {
    if (button === 'kick') {
        triggerSound(kickAudio);
    } 

    if (button === 'snare') {
        triggerSound(snareAudio);
    }

    if (button === 'clap') {
        triggerSound(clapAudio);
    }

    if (button === 'hat') {
        triggerSound(hatAudio);
    }
};

function buttonGlow(keyPress) {
    if ((keyPress === 'k')) {
        document.querySelector('.js-btn-kick').classList.add('glow-green');
        setTimeout(() => {
            document.querySelector('.js-btn-kick').classList.remove('glow-green');
        }, 100);
    } 
    if (keyPress === 'h') {
        document.querySelector('.js-btn-hat').classList.add('glow-green');
        setTimeout(() => {
            document.querySelector('.js-btn-hat').classList.remove('glow-green');
        }, 100);
    };
    
    if ((keyPress === 's')) {
        document.querySelector('.js-btn-snare').classList.add('glow-purple');
        setTimeout(() => {
            document.querySelector('.js-btn-snare').classList.remove('glow-purple');
        }, 100);
    } 

    if (keyPress === 'c') {
        document.querySelector('.js-btn-clap').classList.add('glow-purple');
        setTimeout(() => {
            document.querySelector('.js-btn-clap').classList.remove('glow-purple');
        }, 100);
    }
}