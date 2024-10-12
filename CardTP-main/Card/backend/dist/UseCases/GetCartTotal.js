"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCartTotal = void 0;
class GetCartTotal {
    constructor(storage) {
        this.storage = storage;
    }
    execute() {
        return this.storage.getTotalPrice();
    }
}
exports.GetCartTotal = GetCartTotal;
