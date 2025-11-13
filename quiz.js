const quiz = [
    {
        question: '東京の県の花はなんでしょうか？',
        answer: 'そんなものはない',
        option: ['ソメイヨシノ','バラ','ヒマワリ','そんなものはない']
    },
    {
        question: 'エベレストの高さが判明するよりも前に世界で一番高い山はなんだったでしょうか？',
        answer: 'エベレスト',
        option: ['富士山','エベレスト','ロッキー山脈','マッターホルン']
    },
    {
        question: '日本で一番マグロが取れるのはどこでしょうか？',
        answer: '海',
        option: ['北海道','青森県','寿司屋','海']
    },
    {
        question: '次の中で花にトゲがある植物はどれでしょうか？',
        answer: 'この中にはない',
        option: ['バラ','コスモス','チューリップ','この中にはない']
    },
    {
        question: 'チェスの駒は6種類、将棋の駒は8種類あります。では、オセロの駒は何種類でしょうか？',
        answer: '1種類',
        option: ['1種類','2種類','3種類','10種類']
    }
];

const quizLength = quiz.length;
const button = document.getElementsByClassName('option');
const buttonLength = quiz[0].option.length;
let quizNum = 0;
let score = 0;
let option;


const startButton = document.getElementById('start');
const endButton = document.getElementById('end');
const reset = document.getElementById('reset');
const nextButton1 = document.getElementById('next1');
const nextButton2 = document.getElementById('next2');
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');
const button4 = document.getElementById('button4');

const scoreText = document.getElementById('score');

const quizModal = document.getElementById('quiz');
const modal1 = document.getElementById('modal1');
const closeModal1 = document.getElementById('closeModal1');
const modal2 = document.getElementById('modal2');
const closeModal2 = document.getElementById('closeModal2');
const modal3 = document.getElementById('modal3');

function start(){
    document.getElementById('question').textContent = quiz[quizNum].question;
    for(let i = 0; i < buttonLength; i++){
        button[i].textContent = quiz[quizNum].option[i];
    }
}

function check(e){
    if(quiz[quizNum].answer == quiz[quizNum].option[e]){
        score++;
        if(quizNum < quizLength - 1){
            modal1.showModal();
        } else {
            scoreText.textContent = "SCORE: " + score + "/" + (quizNum + 1);
            modal3.showModal();
        }
    } else {
        if(quizNum < quizLength -1){
            modal2.showModal();
        } else {
            scoreText.textContent = "SCORE: " + score + "/" + (quizNum + 1);
            modal3.showModal();
        }
    }
}

startButton.addEventListener('click',(e) =>{
    quizModal.showModal();
    start(quizNum);
})

button1.addEventListener('click',(e) =>{
    option = 0;
    // console.log(option);
    check(option);
});

button2.addEventListener('click',(e) =>{
    option = 1;
    // console.log(option);
    check(option);
});

button3.addEventListener('click',(e) =>{
    option = 2;
    // console.log(option);
    check(option);
});

button4.addEventListener('click',(e) =>{
    option = 3;
    // console.log(option);
    check(option);
});

closeModal1.addEventListener('click',(e) => {
    scoreText.textContent = "SCORE: " + score + "/" + (quizNum + 1);
    modal1.close();
    modal3.showModal();
});

closeModal2.addEventListener('click',(e) => {
    scoreText.textContent = "SCORE: " + score + "/" + (quizNum + 1);
    modal2.close();
    modal3.showModal();
});

nextButton1.addEventListener('click', (e) => {
    quizNum++;
    modal1.close();
    start();
});

nextButton2.addEventListener('click', (e) => {
    quizNum++;
    modal2.close();
    start();
});

reset.addEventListener('click', (e) => {
    quizNum = 0;
    score = 0;
    modal3.close();
    start();
})

endButton.addEventListener('click', (e) => {

});