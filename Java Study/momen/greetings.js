const form = document.querySelector(".js_form");    //querySelector는 찾은 첫번쨰 것을 가져온다. 클래스명에 따른 엘리먼트들을 가져온다.
const input = form.querySelector("input");
const greetings = document.querySelector(".js_greetings");

const user_Local_Storage = "Name";
const showing_Classname = "showing";

function save_name(text) {                                              
    localStorage.setItem(user_Local_Storage, text);                     // 3-5) 3-4에서 입력된 인자값을 localstorage에 저장해라
}

function handleSubmit(event) {                                                                      
    event.preventDefault();         //제출이 완료되면 정해진곳으로 데이터는 전송되고 새로고침 되는데
    const current_value = input.value;
    paint_Greetings(current_value);                                                                 // 3-3)제출된 이름을 인사말을 출력하는 함수에 넣어 실행해라
    save_name(current_value);                                                                       // 3-4) 제출된 이름을 저장하는 함수에 넣어 실행해라
}                                   //preventDefault를 사용하여 기본동작을 막는다. 
//그렇게하면 Enter를 입력해도 변하지 않는다.
function ask_Name() {                                                   //  
    form.classList.add(showing_Classname);                              // 3-1) 이름을 물어보는 Form 을 보여주고
    form.addEventListener("submit", handleSubmit);                      // 3-2) submit이라는 이벤트가 발생하면 handleSubmit 함수를 호출해라
}

function paint_Greetings(text) {                                        
    form.classList.remove(showing_Classname);                           // 이름을 물어보는 Form을없애라
    greetings.classList.add(showing_Classname);                         // 인사말을 출력하는 문구를 보여줘라
    greetings.innerText = `Hello ${text}`;                              // 비어있는 인사말에 해당 텍스트를 넣어라

}

function load_Name() {                                                  // 
    const current_User = localStorage.getItem(user_Local_Storage);      // 2) user_Local_Storage라는 변수에 Local Storage에 저장될 Key값을 만든다.
    if (current_User === null) {                                        // 3) 저장된 Key값의 Value가 없다면
        ask_Name();                                                     //     이름을 물어보고
    }
    else {                                                              // 4) 있다면 인사말을 출력해라.
        paint_Greetings(current_User);
    }

}


function init() {               //  1)  처음 시작하면 초기화 하면서 load_Name 함수를 불러온다.
    load_Name();
}
init();