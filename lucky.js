"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.luckyFunction = void 0;
function __lucky__() {
    console.log("You got lucky, 1 in 100 people got this lucky message!");
}
function luckyFunction() {
    var random = Math.random() * 100;
    if (random == 77) {
        __lucky__();
    }
    ;
}
exports.luckyFunction = luckyFunction;
;
