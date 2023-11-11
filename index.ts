var __init__: () => any = function () {
    const __init__string = input('"Пожалуйста инициализируйте ваш язык >>>');
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
            console.log('Ошибка инициализации строки')
    }
}

function en_calc() {
    const math_input: number = Number(input('Enter a number: '));
    const math_operator: string = input('Enter a operator: ');
    const math_input2: number = Number(input('Enter another number: '));

    function add() {
        let answer: number;
        answer = math_input + math_input2;
        console.log(answer);
    };

    function sub() {
        let answer: number;
        answer = math_input - math_input2;
        console.log(answer);
    };

    function mut() {
        let answer: number;
        answer = math_input * math_input2;
        console.log(answer);
    };

    function div() {
        let answer: number;
        answer = math_input / math_input2;
        console.log(answer);
    };

    function div_rev() {
        let answer: number;
        answer = math_input2 % math_input;
        console.log(answer);
    };

    switch (math_operator) {
        case '+':
            add();
            break
        case '-':
            sub();
            break
        case '*':
            mut();
            break
        case '/':
            div();
            break
        case '%':
            div_rev();
            break
        case 'init':
            __init__();
            break
        default:
            console.log('Error operator')
    }
    console.clear();
};

const input = require('prompt-sync')({sigint: true});

function ru_calc() {
    const math_input: number = Number(input('Введите число: '));
    const math_operator: string = input('Введите оператор: ');
    const math_input2: number = Number(input('Введите другое число: '));

    function add() {
        let answer: number;
        answer = math_input + math_input2;
        console.log(answer);
    };

    function sub() {
        let answer: number;
        answer = math_input - math_input2;
        console.log(answer);
    };

    function mut() {
        let answer: number;
        answer = math_input * math_input2;
        console.log(answer);
    };

    function div() {
        let answer: number;
        answer = math_input / math_input2;
        console.log(answer);
    };

    function div_rev() {
        let answer: number;
        answer = math_input2 % math_input;
        console.log(answer);
    };

    switch (math_operator) {
        case '+':
            add();
            break
        case '-':
            sub();
            break
        case '*':
            mut();
            break
        case '/':
            div();
            break
        case '%':
            div_rev();
            break
        case 'ясный':
            console.clear();
            break
        case 'init':
            __init__();
            break
        default:
            console.log('Оператор ошибки')
    }
    console.clear();
}

while (true) {
    ru_calc();
}