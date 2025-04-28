// Wish Adding Function
function addWish() {
    var wishInput = document.getElementById('wishInput');
    var wishText = wishInput.value.trim();
    if (wishText !== "") {
        var messagesDiv = document.getElementById('messages');
        var newMessage = document.createElement('p');
        newMessage.textContent = wishText;
        messagesDiv.appendChild(newMessage);
        wishInput.value = "";
    }
}

// Simple Confetti Animation (Optional Fancy Confetti)
const canvas = document.getElementById('confetti');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let pieces = [];

function randomColor() {
    const colors = ['#ff6f91', '#ffcccb', '#ffd700', '#00bfff', '#adff2f'];
    return colors[Math.floor(Math.random() * colors.length)];
}

function ConfettiPiece() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height - canvas.height;
    this.size = Math.random() * 10 + 5;
    this.speed = Math.random() * 3 + 2;
    this.color = randomColor();

    this.update = function() {
        this.y += this.speed;
        if (this.y > canvas.height) {
            this.y = -this.size;
            this.x = Math.random() * canvas.width;
        }
    };

    this.draw = function() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.size, this.size);
    };
}

for (let i = 0; i < 150; i++) {
    pieces.push(new ConfettiPiece());
}

function animateConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let piece of pieces) {
        piece.update();
        piece.draw();
    }
    requestAnimationFrame(animateConfetti);
}

animateConfetti();

// Responsive Canvas
window.addEventListener('resize', function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
