"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartController = void 0;
const AddProductToCart_1 = require("../UseCases/AddProductToCart");
const GetCartTotal_1 = require("../UseCases/GetCartTotal");
const Product_1 = require("../Entities/Product");
class CartController {
    constructor(storage) {
        this.storage = storage;
    }
    addProduct(req, res) {
        const { name, price } = req.body;
        const product = new Product_1.Product(name, price);
        const addProductUseCase = new AddProductToCart_1.AddProductToCart(this.storage);
        addProductUseCase.execute(product);
        res.status(200).send('Product added to cart');
    }
    getTotal(req, res) {
        const getTotalUseCase = new GetCartTotal_1.GetCartTotal(this.storage);
        const total = getTotalUseCase.execute();
        res.status(200).json({ total });
    }
}
exports.CartController = CartController;
