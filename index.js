var lucky_list = [];
for (var i = 1; i <= 100; i++) {
    lucky_list.push(i);
}
;
function __init__() {
    var __init__string = input('Пожалуйста инициализируйте ваш язык >>>');
    switch (__init__string) {
        case 'ru':
            while (true) {
                ru_calc();
            }
        case 'en':
            while (true) {
                en_calc();
            }
        default:
            console.log('Ошибка инициализации строки');
    }
}
function __lucky__() {
    console.log("You got lucky, 1 in 100 people got this lucky message!");
}
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
        case 'init':
            __init__();
            break;
        default:
            console.log('Error operator');
            var random = Math.random() * 100;
            if (random == 77) {
                __lucky__();
            }
    }
}
;
var input = require('prompt-sync')({ sigint: true });
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
        case 'init':
            __init__();
            break;
        default:
            console.log('Оператор ошибки');
    }
}
while (true) {
    ru_calc();
}
