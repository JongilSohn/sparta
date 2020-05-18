const Clock_Container = document.querySelector(".js_clock");
const clock_Title = Clock_Container.querySelector("h1");

// console 창에 const date = new Date() 치면 현재시간을 Date에 저장한다.
// date , date.getDay() 등 치면 현재 시간 등 확인가능 (저장했던 시간, 날씨 등)

function get_Time() {
    const date = new Date();                //date는 Class이다.
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();

    clock_Title.innerText = `${hours < 10 ? '0' + hours : hours} : ${minutes < 10 ? `0${minutes}` : minutes} :  ${seconds < 10 ? '0' + seconds : seconds}`;
                    // if문과 동일하다. Small if문 = 변수 < 조건 ? 참일때 행동 : 거짓일때 행동
                    // 즉 위의 hours는 시간이 10보다 작으면 앞에 0을 붙이고, 크면 그냥 출력한다.
}

//setInteval(A, B)    -->  setInterval은 두 인자를 받는다.  A는 함수이고, B는 실행할 시간 간격이다.
function init() {

    get_Time();
    setInterval(get_Time, 1000);

}

init();