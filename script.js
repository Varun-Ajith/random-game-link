function launchRandomGames() {
    var games = [
        'game1.html',
        'game2.html',
        'game3.html',
        'game4.html',
        'game5.html',
        'game6.html',
        'game7.html'
    ];

    var randomIndex = Math.floor(Math.random() * games.length);
    window.location.href = games[randomIndex];
}

// video
if (window.location.href.includes('game1.html')) {
    document.getElementById('playButton').addEventListener('click', playRandomVideo);

    function playRandomVideo() {
        var videos = [
            'video-1.mp4',
            'video-2.mp4',
            'video-3.mp4',
            'video-4.mp4',
            'video-5.mp4'
        ];

        var randomIndex = Math.floor(Math.random() * videos.length);
        var videoSrc = videos[randomIndex];

        var video = document.getElementById('myVideo');
        video.src = videoSrc;
        video.load();
        video.play();

        video.style.display = 'block';
    }

}

//colour change
if (window.location.href.includes('game2.html')) {
    function changeBackgroundColor() {
        var colors = ['#ff0000', '#00ff00', '#0000ff', 'ffff00', '#ff00ff', '00ffff'];
        var randomColor = colors[Math.floor(Math.random()*colors.length)];
        document.body.style.backgroundColor = randomColor;
    }

    setInterval(changeBackgroundColor, 500);
}

//bEmoji Multiplication Game
if (window.location.href.includes('game3.html')) {
    var emojis = ['😄', '😀'];

    function startGame() {
        createTogglingEmoji();
    }

    function createTogglingEmoji() {
        var emoji = document.createElement('div');
        emoji.className = 'emoji';
        emoji.innerHTML = emojis[0];
        emoji.style.left = Math.random() * (window.innerWidth - 30) + 'px';
        emoji.style.top = Math.random() * (window.innerHeight - 30) + 'px';

        emoji.addEventListener('click', function () {
            toggleEmoji(emoji);
        });

        document.body.appendChild(emoji);
    }

    function toggleEmoji(emojiElement) {
        var currentEmojiIndex = emojis.indexOf(emojiElement.innerHTML);
        var newEmojiIndex = (currentEmojiIndex + 1) % emojis.length;
        emojiElement.innerHTML = emojis[newEmojiIndex];
    }

    window.onload = function () {
        for (var i = 0; i < 5; i++) {
            createTogglingEmoji();
        }
    };

} 

//clickMe
if (window.location.href.includes('game4.html')) {
    function moveButton() {
        var button = document.getElementById('clickButton');

        var windowWidth = window.innerWidth;
        var windowHeight = window.innerHeight;

        var newX = Math.random() * (windowWidth - button.offsetWidth);
        var newY = Math.random() * (windowHeight - button.offsetHeight);

        button.style.left = newX +'px';
        button.style.top = newY + 'px';
    }
}

//The voortex
if (window.location.href.includes('game5.html')) {
    var words = ["Awesome!", "Fantastic!", "Amazing!", "Great!", "Nice!"];

    function getRandomWord() {
        var randomIndex = Math.floor(Math.random() * words.length);
        return words[randomIndex];
    }

    function showPopup() {
        var popupWord = document.getElementById("popupWord");
        var randomWord = getRandomWord();

        popupWord.innerText = randomWord;
        popupWord.style.display = "block";

        setTimeout(function () {
            popupWord.style.display = "none";
        }, 1000); 
    }

    document.addEventListener("touchstart", function () {
        showPopup();
    });

}

//pop the balloon
if (window.location.href.includes('game6.html')) {
    function createBalloon() {
        var balloon = document.createElement('div');
        balloon.className = 'balloon';
        balloon.style.left = Math.random() * (window.innerWidth-50) +'px';
        balloon.style.top = Math.random() * (window.innerHeight-70) + 'px';
        balloon.onclick = function() {
            popBalloon(balloon);
        };
        document.body.appendChild(balloon);
    }

    function popBalloon(balloon) {
        balloon.style.display = 'none';
        setTimeout(function() {
            balloon.style.left = Math.random() * (window.innerWidth-50) +'px';
            balloon.style.top = Math.random() * (window.innerHeight-70) + 'px';
            balloon.style.display = 'block';
        }, 1000);
    }
    setInterval(createBalloon, 5000);
} 

/*QnA*/

if(window.location.href.includes('game7.html')) {
    var questions = [
        "Are you Okay?",
        "You sure?",
        "Have you ever thought you were supposed to be somewhere else?",
        "Is your laugh more like a snort?",
        "Do you think squirrels have secret meetings in abandoned pizza boxes?",
        "Is water wet?",
        "Can fish fly?",
        "Are bananas bluck?",
        "Is the sun cold?",
        "Do you like MJ?"
    ];

    var currentQuestionIndex = 0;
    var questionCount = 0;

    function startGame() {
        displayQuestion();
    }

    function displayQuestion() {
        if (currentQuestionIndex < questions.length) {
            document.getElementById('question').innerText = questions[currentQuestionIndex];
            questionCount++;
        } else {
            endGame();
        }

        if (questionCount === 10) {
            setTimeout(showPopupWord, 2000); // Delayed pop-up after 2 seconds
        }
    }

    function answerQuestion(userAnswer) {
        if (currentQuestionIndex < questions.length) {
            var correctAnswer = "Yes";
            var response = userAnswer === correctAnswer ? "OKAYY!" : "OKAY?";
            document.getElementById('response').innerText = response;
            currentQuestionIndex++;
            displayQuestion();
        }
    }

    function endGame() {
        document.getElementById('fireworks-container').style.display = 'flex';
        document.getElementById('you-win').style.fontSize = '48px';
        createFireworks();
    }

    function createFireworks() {
        var container = document.getElementById('fireworks-container');

        for (var i = 0; i < 100; i++) {
            var firework = document.createElement('div');
            firework.className = 'firework';
            firework.style.left = Math.random() * window.innerWidth + 'px';
            container.appendChild(firework);
        }
    }

    function showPopupWord() {
        var popupContainer = document.getElementById('popup-container');
        var popupWord = document.getElementById('popup-word');
        var audio = document.getElementById('audio');

        var word = "Congratulations!";
        popupWord.innerText = word;

        popupContainer.style.display = 'block';

        // Play the audio
        audio.play();
    }

    window.onload = startGame;

}