import * as HTTPService from './SlotGameController';
import * as view from './SlotGameView'; 

const slotGameServerEndpoint = 'http://127.0.0.1:3000';
let drawRoute = '/api/v1/slotgame/draw?isFreeDraw=false';

let slot = {
    typeDraw: 'normal',
    inprogress: false
};

document.querySelector('.button').addEventListener('click', newGame);

function newGame() {
    slot.inprogress = true;
    slot.typeDraw = 'normal';
    view.clearGame();
    newDraw().then(() => {
        nextAction();
        slot.inprogress = false;
    });
}

async function newDraw() {
    setRoute();
    let response = await HTTPService.getRequest(slotGameServerEndpoint + drawRoute);
    view.displayDraw(response.draw);
    if (slot.typeDraw === 'normal' && response.freeDraw === true) {
        slot.typeDraw = 'free';
    }
}

function setRoute() {
    if (slot.typeDraw === 'normal') {
        view.trackFreeDraw = false;
        drawRoute = drawRoute.replace('isFreeDraw=true', 'isFreeDraw=false')
    }
    else if (slot.typeDraw === 'free') {
        view.trackFreeDraw = true;
        drawRoute = drawRoute.replace('isFreeDraw=false', 'isFreeDraw=true');
    }
}

function isGameFreeDraw() {
    return slot.typeDraw === 'free' ? true : false;
};

function nextAction() {
    if (isGameFreeDraw()){
        setRoute();
        newDraw();
    }
    
}
