"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const InMemoryStorage_1 = require("./Repositories/InMemoryStorage");
const CartController_1 = require("./Controllers/CartController");
const app = (0, express_1.default)();
app.use(express_1.default.json());
const storage = new InMemoryStorage_1.InMemoryStorage();
const cartController = new CartController_1.CartController(storage);
// API маршрути
app.post('/cart/products', (req, res) => cartController.addProduct(req, res));
app.get('/cart/total', (req, res) => cartController.getTotal(req, res));
// Обслуговування статичних файлів з папки React build
app.use(express_1.default.static(path_1.default.join(__dirname, '../frontend/build')));
// Відправлення index.html для всіх не API маршрутів
app.get('*', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, '../frontend/build', 'index.html'));
});
const port = 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
