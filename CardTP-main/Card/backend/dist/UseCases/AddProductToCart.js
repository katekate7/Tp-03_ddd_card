"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddProductToCart = void 0;
class AddProductToCart {
    constructor(storage) {
        this.storage = storage;
    }
    execute(product) {
        this.storage.addProduct(product);
    }
}
exports.AddProductToCart = AddProductToCart;
