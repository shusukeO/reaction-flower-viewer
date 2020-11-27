let haikei;
let flowers = [];
let dataNum = 0;
let happyCount = 0;
function preload() {
    haikei = loadImage('src/bg.jpg');
    for(let i = 0; i < 6; i++){
        flowers[i] = loadImage('src/flower' + i + '.png')
    }
}
//初期化
function setup() {
    //canvas生成
    canvas = createCanvas(windowWidth, windowHeight);

}

function draw() {
    background(255);
    //背景画像セット
    imageMode(CENTER);
    image(haikei, width/2, height/2, width, height);

    // Math.floor(Math.random() * 6)
    let flowerColor = 0;
    let flowerSize;
    for(let i = 0; i < dataNum; i++){
        if(i < happyCount){
            flowerSize = 150;
        }else{
            flowerSize = 100;
        }
        image(flowers[flowerColor], (width / (dataNum + 1) ) * (i + 1), height / 2, flowerSize, flowerSize);

        flowerColor ++;
        if(flowerColor == 5) flowerColor = 0;
    }

}

function ajaxUpdate(url, element) {
 
    //キャッシュされないurlにする
    url = url + '?ver=' + new Date().getTime();

    var ajax = new XMLHttpRequest;
 
    ajax.open('GET', url, true);
 
    ajax.onload = function () {
 
        let responseJson = JSON.parse(ajax.response);
        // if(responseJson.dataNum == 0 && responseJson.dataNum + dataNum != 0) return;
        dataNum = responseJson.dataNum;
        happyCount = responseJson.happyCount;
        console.log(dataNum);
        //DOMを更新
        element.innerHTML = ajax.responseText;
    };
 
    ajax.send(null);
}
 
window.addEventListener('load', function () {
 
    var url = "http://localhost:3000/getHappyNum";
 
    var div = document.getElementById('ajaxreload');
 
    setInterval(function () {
        ajaxUpdate(url, div);
    }, 1000);
 
});