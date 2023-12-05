"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
app.get('/', (req, res) => {
    res.send('Hello my World!!!!!');
});
app.get('/samurais', (req, res) => {
    res.send('Hello, samurais!!!!!!');
});
app.post('/samurais', (req, res) => {
    res.send('We have created new samurai!!!!!');
});
app.listen(port, () => {
    console.log(`Exsemple app listening on port ${port}`);
});
