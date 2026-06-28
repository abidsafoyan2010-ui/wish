const noBtn = document.getElementById('no-btn');
const quizBox = document.getElementById('quiz-box');
const successBox = document.getElementById('success-box');

// শুরুতে No বাটনটিকে Yes বাটনের পাশে সেট করার জন্য
noBtn.style.left = "calc(50% + 20px)";

// বাটনটি এলোমেলোভাবে সরানোর ফাংশন
function moveNoButton() {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth - 40) + 20;
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight - 40) + 20;

    noBtn.style.position = 'fixed';
    noBtn.style.left = x + 'px';
    noBtn.style.top = y + 'px';
}

// মাউস নিলে (কম্পিউটার) বা টাচ করলে (মোবাইল) বাটন দৌড়াবে
noBtn.addEventListener('mouseenter', moveNoButton);
noBtn.addEventListener('touchstart', (e) => {
    e.preventDefault(); 
    moveNoButton();
});

// Yes বাটনে ক্লিক করলে যা হবে
function showSuccess() {
    quizBox.style.display = 'none';
    successBox.style.display = 'block';
    document.body.style.background = "linear-gradient(135deg, #1f1c2c, #928dab)";
}
