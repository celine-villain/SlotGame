const http = require('http');
const url = require('url');
const service = require('../service/SlotGameService.js');

module.exports = http.createServer((req, res) => {

    const reqUrl = url.parse(req.url, true);

    if (reqUrl.pathname === '/api/v1/slotgame/draw' && req.method === 'GET') {

        const draw = service.getSlotResults(3);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Access-Control-Allow-Origin', '*');
        //res.writeHead(200, ['Content-Type', 'application/json', 'Access-Control-Allow-Origin', '*']);
        res.end(JSON.stringify(draw));
    }

    else {
        res.writeHead(404, ('Content-type', 'text/html'));
        res.end('URL was not found on the server');
    }
 
});