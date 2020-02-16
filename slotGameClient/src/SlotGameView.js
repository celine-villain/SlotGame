exports.trackFreeDraw = false;

exports.displayDraw = function(draw) {
    const markup = `
        <li>
            <br><p>${this.trackFreeDraw ? 'FREE DRAW' : 'YOUR DRAW'}</p><br>
            <img src="../img/SYM${draw[0]}.png" class="element">
            <img src="../img/SYM${draw[1]}.png" class="element">
            <img src="../img/SYM${draw[2]}.png" class="element">
            <br><p>${winType(draw)}</p><br>
        </li><hr>
    `;
    document.querySelector('.slot').insertAdjacentHTML('beforeend', markup);
}

exports.clearGame = function() {
    document.querySelector('.slot').innerHTML = '';
}

function winType(draw) {
    if (draw.length === 3) {
        if (draw[0] === draw[1] && draw[0] === draw[2]) {
            return 'Big win';
        }
        else if (draw[0] === draw[1] || draw[0] === draw[2] || draw[1] === draw[2]) {
            return 'Small win';
        }
        else {
            return 'No win';
        }
    } else {
        return '?';
    }
};