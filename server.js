const http = require('http');
const fs = require('fs')

const delay = (ms) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, ms)
    })
}

const readFile = (path) => {
    return new Promise((resolve, reject) => {
        fs.readFile(path, (err, data) => {
            if (err) reject(err)
            else resolve(data);
        })
    })
}

const server = http.createServer(async (request, respons) => {

    switch(request.url) {
        case '/home':{
            try {
            const data = await readFile('pages/home.html')
            respons.write(data);
            respons.end();
            } catch(err) {
                respons.write('somthing is wrong');
                respons.end();
            }
            break;
        }
        case '/about':{
            await delay(3000);
            respons.write('About Page');
            respons.end();
            break;
        }
        default:{
            respons.write('404 - Note Found');
            respons.end();
        }
    }
})

server.listen(3003);