const quiz = [
    {
        question: '東京の県の花はなんでしょうか？',
        answer: 'そんなものはない',
        option: ['ソメイヨシノ','バラ','ヒマワリ','そんなものはない'],
        description: '東京都の花はソメイヨシノですが、東京は「都」であって「県」ではないので「県の花」は存在しません。'
    },
    {
        question: 'エベレストの高さが判明するよりも前に世界で一番高い山はなんだったでしょうか？',
        answer: 'エベレスト',
        option: ['富士山','エベレスト','ロッキー山脈','マッターホルン'],
        description: 'エベレストの高さが判明していない時代であったとしても、エベレストはずっと存在しています。'
    },
    {
        question: '日本で一番マグロが獲れるのはどこでしょうか？',
        answer: '海',
        option: ['北海道','青森県','寿司屋','海'],
        description: '「マグロが一番取れる都道府県」を聞いているわけではありません。マグロは海の生き物なので、当然取れる場所は海です。'
    },
    {
        question: '次の中で花にトゲがある植物はどれでしょうか？',
        answer: 'この中にはない',
        option: ['バラ','コスモス','チューリップ','この中にはない'],
        description: 'バラはトゲがある植物ですが、トゲが生えているのは花の部分ではなく茎の部分です。この中には「花に」トゲがある植物はないので、正解は選択肢にありません。'
    },
    {
        question: 'チェスの駒は6種類、将棋の駒は8種類あります。では、オセロの駒は何種類でしょうか？',
        answer: '1種類',
        option: ['1種類','2種類','3種類','10種類'],
        description: 'オセロの駒はひっくり返して使うので、1種類の駒しか存在しません。'
    },
    {
        question: '学校で給食を1番に食べるのが仕事なのは誰？',
        answer: '校長先生',
        option: ['校長先生','教頭先生','保健室の先生','PTA'],
        description: '学校で給食を最初に食べる役割を持つのは校長先生です。校長先生は給食の準備や衛生面に問題がないかを確認するため、児童が食べ始める前に給食を試食します。'
    },
    {
        question: '視力検査で使用されるCのような形をしたものの名前は？',
        answer: 'ランドルト環',
        option: ['Cマーク','視力マーク','サークルC','ランドルト環'],
        description: 'フランスの眼科医エドムンド・ランドルトが考案したことからこの名が付きました。'
    },
    {
        question: 'ことわざの「急がば回れ」の語源となった場所はどこ？',
        answer: '琵琶湖',
        option: ['富士山','清水寺','厳島神社','琵琶湖'],
        description: '昔は京都への移動手段は琵琶湖を船で渡るか、琵琶湖の周りを歩くかの2択でした。比叡山から吹く突風による船の転覆を回避するため、距離が長くても安全な道を選ぶほうがいいという教えから生まれたことわざです。'
    },
    {
        question: 'サハラ砂漠の「サハラ」は日本語で何？',
        answer: '砂漠',
        option: ['太陽','オアシス','砂漠','乾燥'],
        description: 'サハラ砂漠のサハラは、実はアラビア語で「砂漠」という意味です。なので、直訳すると「砂漠砂漠」となり、重複表現になっています。'
    },
    {
        question: '日めくりカレンダーが生まれた都道府県はどこ？',
        answer: '大阪府',
        option: ['東京都','大阪府','京都府','北海道'],
        description: '日めくりカレンダーは、大阪府で誕生したとされています。明治時代に大阪の印刷業者が1日ごとにページをめくる形式のカレンダーを考案し、実用化しました。'
    },
    {
        question: '在任中に郵政民営化を実現した総理大臣は？',
        answer: '小泉純一郎',
        option: ['小渕恵三','小泉純一郎','福田康夫','森喜朗'],
        description: '「聖域なき構造改革」を掲げ、「官から民へ」のスローガンのもと郵政民営化を推進しました。2005年にはこの是非を問う解散総選挙（いわゆる郵政選挙）を行って大勝し、在任中に民営化関連法案を成立させました。'
    },
    {
        question: '「ハーバー・ボッシュ法」といえば、何という物質の工業的合成法？',
        answer: 'アンモニア',
        option: ['アンモニア','硝酸','炭酸ナトリウム','硫酸'],
        description: '「空気からパンを作る」と称された、画期的な工業的製法です。化学肥料の大量生産が可能になり、世界の人口爆発を支える食糧増産の基盤となりました。'
    },
    {
        question: '食パンの袋などを留めるのに使われる、凸凹した形状のプラスチック製留め具の名前は？',
        answer: 'バッククロージャー',
        option: ['バッククロージャー','ツイストタイ','ビニールタイ','結束バンド'],
        description: 'アメリカのクイック・ロック社が開発しました。正式名称は「バッグ・クロージャー（Bag Closure）」です。'
    },
    {
        question: 'この中にあるイギリスに実在しない法律は？',
        answer: 'お金持ちは公共トイレを使ってはいけない',
        option: ['妊婦はどこで用を足しても大丈夫','お金持ちは公共トイレを使ってはいけない','甲冑を着て国会議事堂内に入ってはいけない','バーで酔っ払っていけない'],
        description: '公共トイレは貧富の差に関係なく、誰でも使用することができます。'
    },
    {
        question: 'ハイジャックの語源は次のうちどれ？',
        answer: 'ジャックという名前が多かったから',
        option: ['空の高いところで襲撃するから','テンションがハイだから','ジャックという名前が多かったから','高い金銭を要求するから'],
        description: '1920年代のアメリカ禁酒法時代、密造酒を運ぶトラックを襲う強盗団が、運転手に**「Hi, Jack!（やあ、お前！）」**と声をかけて銃を突きつけたことが語源です。'
    },
    {
        question: 'クロム(Ⅲ)イオンの色は？',
        answer: '緑色',
        option: ['赤褐色', '淡青色', '緑色', '無色'],
        description: '黄色は酸化数が+6のクロム酸イオン、赤褐色は鉄(Ⅲ)イオン、淡青色は銅(Ⅱ)イオンです。'
    },
    {
        question: '銀閣寺の名前の由来は、次のうちどれでしょうか？',
        answer: '銀箔を貼るつもりでいたから',
        option: ['使用材料の中に銀が配合されていたから', '金閣寺に名前を合わせたかったから', '銀箔を貼るつもりでいたから', '最初は銀箔を貼っていたから'],
        description: '銀閣寺を建てたのは、足利義政です。義政は銀箔を貼ろうと税金をがんばって集めましたが、この頃の室町幕府は金閣寺を建てた頃のような権力を持っていなかったため実現しませんでした。'
    },
    {
        question: 'チュッパチャップスの発祥は？',
        answer: 'スペイン',
        option: ['日本', 'スペイン', 'イギリス', 'オーストラリア'],
        description: '1958年にスペイン・カタルーニャのバルセロナで誕生しました。ポップなカラーのロゴはあの有名な画家サルバドール・ダリ作です。'
    },
    {
        question: 'YNUモニュメントはどこで作成された？',
        answer: 'ベトナム',
        option: ['タイ', 'インドネシア', 'ベトナム', 'フィリピン'],
        description: '協定校であるダナン工科大学の協力により、ベトナムで作成されました。モニュメントは、はるばると海を渡り横浜港へ、そしてＹＮＵキャンパスへと届けられました。'
    },
    {
        question: '世界で最も競技人口が多いスポーツは？',
        answer: 'バレーボール',
        option: ['バスケットボール','クリケット','バレーボール','サッカー'],
        description: '老若男女問わずプレーしやすいバレーが約5億人で最多です。'
    },
    {
        question: '次のうち第一宇宙速度と関係があるのはどれでしょう？',
        answer: '人工衛星',
        option: ['人工衛星','宇宙探査機','光速度','タイムマシン'],
        description: '地表面軌道速度とも呼ばれ、地球の周りを衛星軌道するために必要です。'
    },
    {
        question: 'フレミングの左手の法則で親指は何を指すでしょうか？',
        answer: '電磁力',
        option: ['電磁力','電流','起電力','磁束密度'],
        description: '親指から電磁力、電流、磁束密度となります。'
    },
    {
        question: '横浜国立大学はもともとゴルフ場ですが、その名前は何でしょう？',
        answer: '程ヶ谷カントリー倶楽部',
        option: ['市立保土ヶ谷ゴルフ場','程ヶ谷カントリー倶楽部','ヨコハマ倶楽部常盤台','釜台岡沢町ゴルフ倶楽部'],
        description: '程ヶ谷カントリー倶楽部は移転され、現在は旭区にあります。'
    },
    {
        question: '横浜国立大学の学籍番号にある数字の左三桁目と四桁目はなにを表しているでしょうか？',
        answer: '学部と学科',
        option: ['〇期生','学部','入試の得点率','学部と学科'],
        description: '学籍番号は左から入学年度(2桁)、学部、学科、五十音順(3桁)となります。'
    },
    {
        question: '英語のアルファベットの一番最初の文字はAでBの前にあります。では、一番最後の文字は何でしょう？',
        answer: 'T',
        option: ['Q','T','X','Z'],
        description: '英語の「Alphabet」において、最後の文字はTです。'
    },
    {
        question: '3メートルの鎖にライオンが繋がれています。そのライオンは何メートル先までの草を食べることができるでしょうか。',
        answer: '食べられない',
        option: ['食べられない','3メートル','6メートル','9メートル'],
        description: 'ライオンは肉食なので草は食べません。'
    },
    {
        question: '6人でかくれんぼをしている子供がいました。3人見つかりましたが残りは何人でしょう？',
        answer: '2人',
        option: ['2人','3人','4人','5人'],
        description: '1人は鬼をやっているので残りは2人です。'
    },
    {
        question: '三つの花束と、二つの花束。合わせたら、何束になる？',
        answer: '一束',
        option: ['一束','二束','三束','五束'],
        description: '合わせて束にしてしまえば一束です。'
    },
    {
        question: '日本で最人口が多い市町村はどこでしょう？',
        answer: '横浜市',
        option: ['札幌市','さいたま市','横浜市','大阪市'],
        description: '人口は多い順に横浜市が377万人、大阪市が275万人、名古屋市が233万人と続きます。'
    },
    {
        question: '日本の公用語は何でしょう？',
        answer: '公用語はない',
        option: ['日本語','英語','中国語','公用語はない'],
        description: '日本に定められた公用語はありません。一方、日本語はパラオの公用語の一つとなっています。'
    },
    {
        question: '過去に世界で一番大きかった国はどこでしょう？',
        answer: 'イギリス',
        option: ['元','ソ連','イギリス','ポルトガル'],
        description: '大英帝国の最盛期は、世界の陸地の約24%を占めていました。'
    },
    {
        question: 'アメリカで最もGDPが大きい州はどこでしょう？',
        answer: 'カリフォルニア州',
        option: ['ワシントン州','ニューヨーク州','カリフォルニア州','テキサス州'],
        description: 'カリフォルニア州のGDPは約4兆ドル。日本のGDPよりも高いです。'
    },
    {
        question: 'オーストラリアの首都はどこ？',
        answer: 'キャンベラ',
        option: ['シドニー','メルボルン','キャンベラ','ブリスベン'],
        description: 'キャンベラはシドニーとメルボルンの中間に建設された計画都市です。ちなみにシドニーは最大、メルボルンとブリスベンは第2、第3の都市です。'
    }
];

const quizLength = quiz.length;
const button = document.getElementsByClassName('choiceButtons');
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
    document.getElementById('question').textContent = quiz[index].question;
    document.getElementById('answer1').textContent = "答え: " + quiz[index].answer;
    document.getElementById('discription1').textContent = quiz[index].description;
    document.getElementById('answer2').textContent = "答え: " + quiz[index].answer;
    document.getElementById('discription2').textContent = quiz[index].description;
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
    for(let i = 0; i < quizLength; i++){
        flag[i] = 1;
    };
    start();
})

endButton.addEventListener('click', (e) => {
    count = 0;
    score = 0;
    modal3.close();
    quizModal.close();
});