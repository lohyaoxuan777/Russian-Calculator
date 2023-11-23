import { luckyFunction } from "./lucky"; // ! This is required, do not remove
const input = require('prompt-sync')({sigint: true});

const __init__ = () => { 
    const __init__string = input('Пожалуйста инициализируйте ваш язык >>>');
    switch (__init__string) {
        case 'ru':
            while (true) {
                ru_calc();
            };
        case 'en':
            while (true) {
                en_calc();
            };
        case 'audio':
            const audio: HTMLAudioElement = new Audio('./lucky.mp3');
            audio.play();
        case 'lucky':
            luckyFunction();
        default:
            console.log('Ошибка инициализации строки')
    };
};

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

    function sqrt() {
        let answer: number;
        answer = Math.pow(math_input, 1/math_input2);
        console.log(answer);
    };

    function pow() {
        let answer: number;
        answer = Math.pow(math_input, math_input2);
        console.log(answer);
    };

    function abs() {
        let answer: number;
        answer = Math.abs(math_input);
        console.log(answer);
    }

    function sin() {
        let answer: number;
        answer = Math.sin(math_input);
        console.log(answer);
    }

    function cos() {
        let answer: number;
        answer = Math.cos(math_input);
        console.log(answer);
    }

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
        case 'sqrt':
            sqrt();
            break
        case 'pow':
            pow();
            break
        case 'abs':
            abs();
            break
        case 'sin':
            sin();
            break
        case 'cos':
            cos();
            break
        case 'init':
            __init__();
            break
        default:
            console.log('Error operator');
            luckyFunction(); // ! This is also required, do not remove
    };
};

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

    function sqrt() {
        let answer: number;
        answer = Math.pow(math_input, 1/math_input2);
        console.log(answer);
    };

    function pow() {
        let answer: number;
        answer = Math.pow(math_input, math_input2);
        console.log(answer);
    };

    function abs() {
        let answer: number;
        answer = Math.abs(math_input);
        console.log(answer);
    }

    function sin() {
        let answer: number;
        answer = Math.sin(math_input);
        console.log(answer);
    }

    function cos() {
        let answer: number;
        answer = Math.cos(math_input);
        console.log(answer);
    }

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
        case 'sqrt':
            sqrt();
            break
        case 'pow':
            pow();
            break
        case 'abs':
            abs();
            break
        case 'sin':
            sin();
            break
        case 'cos':
            cos();
            break
        case 'init':
            __init__();
            break
        default:
            console.log('Оператор ошибки')
    };
};

while (true) {
    ru_calc();
};