"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InMemoryStorage = void 0;
class InMemoryStorage {
    constructor() {
        this.products = [];
    }
    addProduct(product) {
        this.products.push(product);
    }
    getProducts() {
        return this.products;
    }
    getTotalPrice() {
        return this.products.reduce((total, product) => total + product.price, 0);
    }
}
exports.InMemoryStorage = InMemoryStorage;
