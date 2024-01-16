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
