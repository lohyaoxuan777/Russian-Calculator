"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lucky_1 = require("../lucky"); // ! This is required, do not remove
var input = require('prompt-sync')({ sigint: true });
var __init__ = function () {
    var __init__string = input('Пожалуйста инициализируйте ваш язык >>>');
    switch (__init__string) {
        case 'ru':
            while (true) {
                ru_calc();
            }
            ;
        case 'en':
            while (true) {
                en_calc();
            }
            ;
        case 'audio':
            var audio = new Audio('./lucky.mp3');
            audio.play();
        case 'date':
            var date = new Date();
            console.log(date);
        case 'lucky':
            (0, lucky_1.luckyFunction)();
        default:
            console.log('Ошибка инициализации строки');
    }
    ;
};
function en_calc() {
    var math_input = Number(input('Enter a number: '));
    var math_operator = input('Enter a operator: ');
    var math_input2 = Number(input('Enter another number: '));
    function add() {
        var answer;
        answer = math_input + math_input2;
        console.log(answer);
    }
    ;
    function sub() {
        var answer;
        answer = math_input - math_input2;
        console.log(answer);
    }
    ;
    function mut() {
        var answer;
        answer = math_input * math_input2;
        console.log(answer);
    }
    ;
    function div() {
        var answer;
        answer = math_input / math_input2;
        console.log(answer);
    }
    ;
    function div_rev() {
        var answer;
        answer = math_input2 % math_input;
        console.log(answer);
    }
    ;
    function sqrt() {
        var answer;
        answer = Math.pow(math_input, 1 / math_input2);
        console.log(answer);
    }
    ;
    function pow() {
        var answer;
        answer = Math.pow(math_input, math_input2);
        console.log(answer);
    }
    ;
    function abs() {
        var answer;
        answer = Math.abs(math_input);
        console.log(answer);
    }
    function sin() {
        var answer;
        answer = Math.sin(math_input);
        console.log(answer);
    }
    function cos() {
        var answer;
        answer = Math.cos(math_input);
        console.log(answer);
    }
    switch (math_operator) {
        case '+':
            add();
            break;
        case '-':
            sub();
            break;
        case '*':
            mut();
            break;
        case '/':
            div();
            break;
        case '%':
            div_rev();
            break;
        case 'sqrt':
            sqrt();
            break;
        case 'pow':
            pow();
            break;
        case 'abs':
            abs();
            break;
        case 'sin':
            sin();
            break;
        case 'cos':
            cos();
            break;
        case 'init':
            __init__();
            break;
        default:
            console.log('Error operator');
            (0, lucky_1.luckyFunction)(); // ! This is also required, do not remove
    }
    ;
}
;
function ru_calc() {
    var math_input = Number(input('Введите число: '));
    var math_operator = input('Введите оператор: ');
    var math_input2 = Number(input('Введите другое число: '));
    function add() {
        var answer;
        answer = math_input + math_input2;
        console.log(answer);
    }
    ;
    function sub() {
        var answer;
        answer = math_input - math_input2;
        console.log(answer);
    }
    ;
    function mut() {
        var answer;
        answer = math_input * math_input2;
        console.log(answer);
    }
    ;
    function div() {
        var answer;
        answer = math_input / math_input2;
        console.log(answer);
    }
    ;
    function div_rev() {
        var answer;
        answer = math_input2 % math_input;
        console.log(answer);
    }
    ;
    function sqrt() {
        var answer;
        answer = Math.pow(math_input, 1 / math_input2);
        console.log(answer);
    }
    ;
    function pow() {
        var answer;
        answer = Math.pow(math_input, math_input2);
        console.log(answer);
    }
    ;
    function abs() {
        var answer;
        answer = Math.abs(math_input);
        console.log(answer);
    }
    function sin() {
        var answer;
        answer = Math.sin(math_input);
        console.log(answer);
    }
    function cos() {
        var answer;
        answer = Math.cos(math_input);
        console.log(answer);
    }
    switch (math_operator) {
        case '+':
            add();
            break;
        case '-':
            sub();
            break;
        case '*':
            mut();
            break;
        case '/':
            div();
            break;
        case '%':
            div_rev();
            break;
        case 'ясный':
            console.clear();
            break;
        case 'sqrt':
            sqrt();
            break;
        case 'pow':
            pow();
            break;
        case 'abs':
            abs();
            break;
        case 'sin':
            sin();
            break;
        case 'cos':
            cos();
            break;
        case 'init':
            __init__();
            break;
        default:
            console.log('Оператор ошибки');
    }
    ;
}
;
while (true) {
    ru_calc();
}
;
