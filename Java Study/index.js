//alert('I am studing. javascript');  // 새로고침시 팝업 출력.
//console.log('I am studing. javascript');






// const calcurator = {
//     plus: function (a, b) {
//         return a + b;
//     },
//     minus: function (a,b) {
//         return a-b;
//     }
// }

// const plus = calcurator.plus(5,5)
// const minus = calcurator.minus(5,5)


// console.log(plus, minus)







//Variable : 
//b=2   instruction 
//a=2   모든 Instruction은 각기 다른 라인에 작성.

//항상 변수를 사용할때는, 1.생성 2. 초기화 3. 사용

//let은 별할 수 있음
//const 변하지 않음

//const = "abc" 가능

//Boolean
//const what = true;

//Number
// const what = 666;

//Float
// const what = 55.1;


/*Array 배열 , List를 만들때 사용한다.    [ ]

const daysOfWeek =
const monday="Mon";
const tuesday="Tue";
const wednsday="Wed";
const thursday="Thu";
const friday="Fri";
console.log(monday, Tuesday, Wednsday, Thursday, Friday)

==>>

const daysOfWeek = ["Monday", "Tuesday", "Wednsday","Thursday","Friday",true]
console.log(daysOfWeek)

if Tuesday를 찍고 싶다면
console.log(daysOfWeek[2])
*/


/*
Object 배열이지만 각 value에 이름을 줄 수 있다. (개인정보를 담을때 등등)   {}

const a_person = {
    name: "Sohn",       name은 변수기때문에 ""을 붙이지 않는다. Sohn은 텍스트기때문에 "Sohn"
    age: "29",
    sex: "male",
    where: "Seoul"
}

console.log(a_person.name)  --> a_person의 이름만 출력

a_person.sex = "female" 을 입력하게 되면 a_person의 sex가 female로 바뀐다.


{
    [
         {
            
        }
    ]
}

Object 안에 Array, Array 안에 Object 가능하다.
*/


/*
console.log('Hi Jong')
console.log('Hi jeon')
console.log('Hi bora')
console.log('Hi sohn')

을
greetings jong
greetings jeon
~
greetings sohn
으로 바꾸고 싶을때 Hi를 greetings를 한번에 바꾸기 위해 함수를 만든다. function

function sayHello() {
    console.log('Hello!');
    
}

sayHello("sohn");
console.log("Hi")
------------------------------------
function sayHello(name){
    console.log('Hello!', name);
}

sayHello("Sohn");
console.log("Hi");
= Hello! Sonh
  Hi!                   --> 외부에 있는 데이터를 읽어 함수내에서 출력할 수 있다.

  function sayHello(name, age){
      console.log('Hello!', name, 'Your age is', age)
  }
  sayHello("Sohn", 29);         --> Hello! Sohn your age is 29
*/




/* 향상된 console.log 
  function sayHello(name, age){
      console.log("Hello" + name + "you age is" + age)
  }
  sayHello("Sohn", 29);         --> Hello! Sohn your age is 29  --> 너무 별로다.

  그래서 

  백틱(`) 을 사용한다.

  console.log(`Hello! $(name) Your age is $(age)`); --> Hello! Sohn your age is 29  



  function sayHello(name, age){
      console.log(`Hello! $(name) Your age is $(age)`);       return: 돈을 냈으면 잔돈을 받는것과 같다.
  }
  const greetSohn = sayHello ("Sohn", 29)     
  console.log(greetSohn)        --> undefined   

  undefined를 풀어주기 위해서는 

  function sayHello(name, age){
      return `Hello! $(name) Your age is $(age)`      !!!!!!!!!!!!!!
  }
  const greetSohn = sayHello ("Sohn", 29)       
  console.log(greetSohn)        --> Hello! Sohn your age is 29 

--------------------------------------------------------------------------
const calcurator = {                                return을 사용한 덧셈
    plus: function (a, b) {
        return a + b;
    }
}
calcurator.plus(5, 5)

*/




/*
const calcurator = {
    plus: function (a, b) {
        return a + b;
    }

}
calcurator.plus(5, 5)
*/




/* 자바스크립트만을 사용하여 CSS변경
const title = document.getElementById("title");

console.log(title);

title.innerHTML = "Hi Bora Hhhh"  --> title id를 가지고 있는 내용이 변경된다.

const title = document.getElementById("title");  --> title id를 가지고 있는 내용이 출력된다.

title.style.color ='red';  --> title id를 가지고 있는 스타일 색깔을 빨간색으로 변경한다.

console.dir(title);   -->  dir로 하게되면 title id를 가지고 있는 변경할 수 있는 모든 객체가 출력된다.

console.dir(documet);  --> document의 변경할 수 있는 모든 객체를 표기한다.

document.title = "JS Sohn";  --> Document의 Title을 변경

*/

//const title = document.getElementById("title");

//const title = document.querySelector("#title");   QuerySelector는 노드의 첫번째 자식을 반환한다.





// window.addEventListener("resize", handleResize);  --> 윈도우의 사이즈 ( 즉 크롬창의 크기 )

//                             //  handleResize 라고 써야한다.   --> 너가 원할때 함수를 호출해라.
//                             // handleResize() 는 안된다!!!!!!  --> 지금 바로 함수를 호출해라
//                             // 아주 아주 아주 아주 아주 중요하다.






// function handleResize(event) {
//     console.log(event);
// }
// window.addEventListener("resize", handleResize(event));  이벤트가 발생할때마다 모든 이벤트가 출력된다.


// const title=document.querySelector("#title");

// function handleClick() {                         handleClick 함수를 호출하게 되면 title의 색깔을 파랑으로
//    title.style.color ="blue";
// }
// window.addEventListener("click", handleClick);     클릭을 기다리고 있다. 클릭하게되면 handleClick함수 호출






// title이란 id를 가진 것을 클릭했을때, 그 키의 색깔을 바꾸었다가 돌렸다가.
// const title = document.querySelector("#title");

// const base_color = "rgb(143, 126, 29)";
// const other_color = "red";

// function handleClick() {

//     const current_color = title.style.color;

//     if (current_color === base_color) {
//         title.style.color = other_color;
//     }
//     else {
//         title.style.color = base_color;
//     }
// }

// function init() {
//     title.style.color = base_color;
//     title.addEventListener("click", handleClick);     --> "mouseenter"로 변경시 마우스를 가져다대면 색깔 변경
// }                                                        더 많은 이벤트를 보려면 HTML JavaScript DOM event MDN 검색

// init();




const title = document.querySelector("#title");

const clicked_class = "clicked";

function handleClick() {

    const current_class = title.className;

    if (current_class !== clicked_class) {
        title.className = clicked_class;
    }
    else {
        title.className = "";
    }
}

function init() {
    title.addEventListener("click", handleClick);
}

init();