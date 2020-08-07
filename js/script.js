const button = document.querySelector('button');
const body = document.querySelector('body');
const output = document.getElementById('output');
const satu = document.getElementById('satu');

const randomNumber = (colorLib = 16777216) => {
    return Math.floor(Math.random() * Math.floor(colorLib));
}

const salam = [
    "Halo",
    "Apa kabar?",
    "Hello",
    "How are you?",
    "السلام عليكم",
    "كيف حالك؟",
    "안녕하세요",
    "어떻게 지내?"
];

const getNewColor = () => {
    let symbols, color;
    symbols = "0123456789ABCDEF"
    color = "#"
    for(let i = 0; i < 6; i++) {
        color += symbols[Math.floor(Math.random() * 16)];
    }
    body.style.backgroundColor = color;
    satu.innerHTML = color;
}

const randomColor = () => {
//    body.style.backgroundColor = `#${randomNumber().toString(16)}`;
//    button.style.boxShadow = `#${Math.abs(8388608 - randomNumber()).toString(16)}`;
    button.style.backgroundColor = `#${(16777216 - randomNumber()).toString(16)}`;
    button.style.border = `0.5vh solid #${Math.abs(8388608 - randomNumber()).toString(16)}`;
    button.style.color = `#${randomNumber().toString(16)}`;
}

button.addEventListener('click', () => {
    randomColor();
    getNewColor();
    const randomSalam = salam[Math.floor(Math.random() * salam.length)];
    output.innerHTML = randomSalam;
});
