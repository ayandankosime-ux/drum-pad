const kickAudio = document.querySelector('.js-kick-audio');
const snareAudio = document.querySelector('.js-snare-audio');
const clapAudio = document.querySelector('.js-clap-audio');
const hatAudio = document.querySelector('.js-hat-audio');

const kickBtn = document.querySelector('.js-btn-kick');
const snareBtn = document.querySelector('.js-btn-snare');
const clapBtn = document.querySelector('.js-btn-clap');
const hatBtn = document.querySelector('.js-btn-hat');

kickBtn.addEventListener('click', () => {
    console.log('play audio');
    playAudio('kick');
});

snareBtn.addEventListener('click', () => {
    console.log('play audio');
    playAudio('snare');
});

clapBtn.addEventListener('click', () => {
    console.log('play audio');
    playAudio('clap');
});

hatBtn.addEventListener('click', () => {
    console.log('play audio');
    playAudio('hat');
});

function playAudio(button) {
    if (button === 'kick') {
        kickAudio.play();
    } 

    if (button === 'snare') {
        snareAudio.play();
    }

    if (button === 'clap') {
        clapAudio.play();
    }

    if (button === 'hat') {
        hatAudio.play();
    }
};