const messages = [
    "I said the correct button. No this one.",
    "If you want to win you need to press the CORRECT button.",
    "You are not very good at this, are you?",
    "OMG, How hard is it to press the correct button?",
    "I am starting to lose faith that you can actually do this.",
    "Would you like help with this?",
    "Even a baby can do this. Are you a Baby?",
    "Oh come on, this is getting boring now.",
    "Oops, wrong button! Try again.",
    "Nope, that's not the one. Keep trying!",
    "Almost there, but not quite.",
    "Better luck next time!",
    "Not this one either. You can do it!",
    "Hmm, still not the correct button.",
    "Keep pressing, you'll get it eventually!",
    "Wrong again! Don't give up!",
    "This isn't the right button. Try another one.",
    "You're getting closer, but this isn't it.",
    "Nope, not this one. Keep going!",
    "Incorrect button. Try a different one.",
    "Not quite. Keep pressing those buttons!",
    "Wrong choice. Try again!",
    "This isn't the correct button. Keep trying!",
    "Nope, that's not it. Don't lose hope!",
    "Still not the right button. You can do it! lol",
    "Incorrect again. Keep pressing!",
    "Not this one. Try another button.",
    "Almost there, pinky promise!",
    "Just a little bit more",
];

let currentIndex = 0;

function cycleMessage() {
    const dText = document.getElementById('dText');
    dText.innerText = messages[currentIndex];
    currentIndex = (currentIndex + 1) % messages.length;
};

