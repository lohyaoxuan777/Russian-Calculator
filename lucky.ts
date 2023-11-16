function __lucky__() {
    console.log("You got lucky, 1 in 100 people got this lucky message!");
}

function luckyFunction() {
    let random = Math.random() * 100;

    if (random == 77) {
        __lucky__();
    };
};

export { luckyFunction};
