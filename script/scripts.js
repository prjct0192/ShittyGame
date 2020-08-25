var $start = document.querySelector('#start');
var $game = document.querySelector('#game');
var $time = document.querySelector('#time');
var $result = document.querySelector('#result');
var $timeHeader = document.querySelector('#time-header');
var $resultHeader = document.querySelector('#result-header');

var score = 0
var isGameStarted = false;
$start.addEventListener('click', startGame);
$game.addEventListener('click', handleBoxClick);

function startGame() {
    isGameStarted = true;
    $start.classList.add('hide');
    $game.style.backgroundColor = '#fff';


    var interval = setInterval(function () {
        var time = parseFloat($time.textContent);

        if (time <= 0){
            clearInterval(interval);
        }else {
            $time.textContent = (time - 0.1).toFixed(1)
        }
    }, 100)

    renderBox();

}

function setGameScore() {
    $result.textContent = score.toString();
}
function endGame() {
    isGameStarted = false;
    setGameScore();
    $start.classList.remove('hide');
    $game.innerHTML = '';
    $game.style.backgroundColor = '#ccc';
    $timeHeader.classList.add('hide');
    $resultHeader.classList.remove('hide');
}

function handleBoxClick(event) {
    if (isGameStarted) {
        return
    }
    if (event.target.dataset.box) {
        score++;
        renderBox();
    }
}

 function renderBox() {
    $game.innerHTML = '';
    var box = document.createElement('div');
    var boxSize = getRandom(30, 100);
    var gameSize = $game.getBoundingClientRect();
    var maxTop = gameSize.height - boxSize;
    var maxLeft = gameSize.width - boxSize;
        box.style.backgroundColor = '#000';
        box.style.cursor = 'pointer';
        box.style.position = 'absolute';
        box.style.height = box.style.width = boxSize + 'px';
        box.style.left = getRandom(0, maxLeft) + 'px';
        box.style.top = getRandom(0, maxTop) + 'px';
        box.setAttribute('data-box', 'true');

        $game.insertAdjacentElement('afterbegin', box);

 }

 function getRandom(min, max) {
     return Math.floor(Math.random() * (min-max) + min);
 }