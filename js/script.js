const button = document.querySelector('button');
const body = document.querySelector('body');
const output = document.getElementById('output');


const randomNumber = (colorLib = 16777216) => {
    return Math.floor(Math.random() * Math.floor(colorLib));
}

const salam = [
    "Halo",
    "Apa Kabar?",
    "Hello",
    "How are You?",
    "السلام عليكم",
    "كيف حالك؟",
    "안녕하세요",
    "어떻게 지내?"
]

const randomColor = () => {
    body.style.backgroundColor = `#${randomNumber().toString(16)}`;
    button.style.backgroundColor = `#${(16777216 - randomNumber()).toString(16)}`;
    button.style.border = `0.5vh solid #${Math.abs(8388608 - randomNumber()).toString(16)}`;
//    button.style.boxShadow = `#${Math.abs(8388608 - randomNumber()).toString(16)}`;
    button.style.color = `#${randomNumber().toString(16)}`;
}

button.addEventListener('click', () => {
    randomColor();
    const randomSalam = salam[Math.floor(Math.random() * salam.length)];
    output.innerHTML = randomSalam;
});