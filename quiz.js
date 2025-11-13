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
    },
    {
        question: '学校で給食を1番に食べるのが仕事なのは誰？',
        answer: '校長先生',
        option: ['校長先生','教頭先生','保健室の先生','配膳係の生徒']
    },
    {
            question: '視力検査で使用されるCのような形をしたものの名前は？',
            answer: 'ランドルト環',
            option: ['Cマーク','視力マーク','サークルC','ランドルト環']
    },
    {
            question: 'ことわざの「急がば回れ」の語源となった場所はどこ？',
            answer: '琵琶湖',
            option: ['富士山','清水寺','厳島神社','琵琶湖']
    },
    {
            question: 'サハラ砂漠の「サハラ」は日本語で何？',
            answer: '砂漠',
            option: ['太陽','オアシス','砂漠','乾燥']
    },
    {
            question: '日めくりカレンダーが生まれた都道府県はどこ？',
            answer: '大阪府',
            option: ['東京都','大阪府','京都府','北海道']
    },
    {
            question: '在任中に郵政民営化を実現した総理大臣は？',
            answer: '小泉純一郎',
            option: ['小渕恵三','小泉純一郎','福田康夫','森喜朗']
    },
    {
            question: '「ハーバー・ボッシュ法」といえば、何という物質の工業的合成法？',
            answer: 'アンモニア',
            option: ['アンモニア','硝酸','炭酸ナトリウム','硫酸']
    },
    {
        question: '英語のアルファベットの一番最初の文字はAでBの前にあります。では、一番最後の文字は何でしょう？',
        answer: 'T',
        option: ['Q','T','X','Z']
    },
    {
        question: '3メートルの鎖にライオンが繋がれています。そのライオンは何メートル先までの草を食べることができるでしょうか。',
        answer: '食べられない',
        option: ['食べられない','3メートル','6メートル','9メートル']
    },
    {
        question: '6人でかくれんぼをしている子供がいました。3人見つかりましたが残りは何人でしょう？',
        answer: '2人',
        option: ['2人','3人','4人','5人']
    },

    {
        question: '三つの花束と、二つの花束。合わせたら、何束になる？',
        answer: '一束',
        option: ['一束','二束','三束','五束']
    },

    {
        question: '日本で最人口が多い市町村はどこでしょう？',
        answer: '横浜市',
        option: ['札幌市','さいたま市','横浜市','大阪市']
    },

    {
        question: '日本の公用語は何でしょう？',
        answer: '公用語はない',
        option: ['日本語','英語','中国語','公用語はない']
    },

    {
        question: '世界で一番大きかった国はどこでしょう？',
        answer: 'イギリス',
        option: ['元','ソ連','イギリス','ポルトガル']
    }
];

const quizLength = quiz.length;
const button = document.getElementsByClassName('option');
const buttonLength = quiz[0].option.length;
let count = 0;
let score = 0;
let option;
let index;
let flag = [];


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

function makeindex(){
    index = Math.floor(Math.random() * quizLength);
    if(flag[index]){
        flag[index] = 0;
    } else {
        makeindex();
    }
}

function start(){
    makeindex();
    console.log(flag);
    document.getElementById('question').textContent = quiz[index].question;
    for(let i = 0; i < buttonLength; i++){
        button[i].textContent = quiz[index].option[i];
    }
}

function check(e){
    if(quiz[index].answer == quiz[index].option[e]){
        score++;
        if(count < quizLength - 1){
            modal1.showModal();
        } else {
            scoreText.textContent = "SCORE: " + score + "/" + (count + 1);
            modal3.showModal();
        }
    } else {
        if(count < quizLength -1){
            modal2.showModal();
        } else {
            scoreText.textContent = "SCORE: " + score + "/" + (count + 1);
            modal3.showModal();
        }
    }
}

startButton.addEventListener('click',(e) =>{
    for(let i = 0; i < quizLength; i++){
        flag[i] = 1;
    };
    quizModal.showModal();
    start();
});

button1.addEventListener('click',(e) =>{
    option = 0;
    check(option);
});

button2.addEventListener('click',(e) =>{
    option = 1;
    check(option);
});

button3.addEventListener('click',(e) =>{
    option = 2;
    check(option);
});

button4.addEventListener('click',(e) =>{
    option = 3;
    check(option);
});

closeModal1.addEventListener('click',(e) => {
    scoreText.textContent = "SCORE: " + score + "/" + (count + 1);
    modal1.close();
    modal3.showModal();
});

closeModal2.addEventListener('click',(e) => {
    scoreText.textContent = "SCORE: " + score + "/" + (count + 1);
    modal2.close();
    modal3.showModal();
});

nextButton1.addEventListener('click', (e) => {
    count++;
    modal1.close();
    start();
});

nextButton2.addEventListener('click', (e) => {
    count++;
    modal2.close();
    start();
});

reset.addEventListener('click', (e) => {
    count = 0;
    score = 0;
    modal3.close();
    start();
})

endButton.addEventListener('click', (e) => {
    count = 0;
    score = 0;
    modal3.close();
    quizModal.close();
});