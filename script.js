function sendMessage() {
    const input = document.getElementById('messageInput');
    const messages = document.getElementById('messages');

    if (input.value.trim() !== "") {
        const newMessage = document.createElement('div');
        newMessage.textContent = "🎈 " + input.value;
        messages.appendChild(newMessage);
        input.value = "";

        launchConfetti();
    }
}

// Confetti animation
const canvas = document.getElementById('confetti');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const confetti = [];

for (let i = 0; i < 100; i++) {
    confetti.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 6 + 4,
        d: Math.random() * 5 + 1,
        color: "hsl(" + Math.random() * 360 + ", 70%, 60%)",
    });
}

function drawConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < confetti.length; i++) {
        const c = confetti[i];
        ctx.beginPath();
        ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2, false);
        ctx.fillStyle = c.color;
        ctx.fill();
    }
    moveConfetti();
}

function moveConfetti() {
    for (let i = 0; i < confetti.length; i++) {
        const c = confetti[i];
        c.y += c.d;
        if (c.y > canvas.height) {
            c.y = 0;
            c.x = Math.random() * canvas.width;
        }
    }
}

function launchConfetti() {
    setInterval(drawConfetti, 20);
}

window.addEventListener('resize', function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
