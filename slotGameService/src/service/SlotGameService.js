exports.getSlotResults = function(numberOfDraws) {
    const randomNumbers = [];
    for (let i = 0; i < numberOfDraws; i++) {
        randomNumbers[i] = randomize(5);
    }

    return {
        freeDraw: getBonus(),
        draw: randomNumbers
    };
};

function getBonus() {
    return randomize(1) === 1 ? true : false;
};

function randomize(n) {
    return Math.round(Math.random() * n) ;
};
