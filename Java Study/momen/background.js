const body = document.querySelector("body");

const IMG_NUMBER = 6;

function handleImgLoad() {
    console.log("finished loading");
}

function paintImage(imgNumber) {
    const image = new Image();
    image.src = `images/${imgNumber + 1}.jpg`;
    body.prepend(image);
    image.classList.add("backgroundImage");
    image.addEventListener("loadend", handleImgLoad);

}

function genRandom() {
    const number = Math.floor(Math.random() * IMG_NUMBER);   // Math.random() 하면 모든 임의의 숫자를 출력 / Math.random()*5 하면 0~5까지의 모든 양의 실수 출력
    //Math.floor() 내림, Math.ceil() 올림 
    return number;
}

function init() {
    const random_num = genRandom();
    paintImage(random_num)
}
init();