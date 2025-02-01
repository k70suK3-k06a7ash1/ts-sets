"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pick = pick;
function pick(keys, obj) {
    const x = [...keys].reduce((pre, current) => (Object.assign(Object.assign({}, pre), { [current]: obj[current] })), {});
    return x;
}
