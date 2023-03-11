// Code your solutions in this file

function writeCards(name, value) {
    const message = []
    for (let i = 0; i < name.length; i++) {
        message.push(`Thank you, ${name[i]}, for the wonderful ${value} gift!`);
    }
    return message;
};

function countDown(i) {
    while(i >= 0) {
        console.log(i);
        i--;
    };
};