const toDoForm = document.querySelector(".js_toDoForm"),
toDoInput = toDoForm.querySelector("input"),
toDoList = document.querySelector(".js_toDoList");

const TODOS_LS = 'toDos';

let toDos = [];

function filterFn(toDo) {
    return toDo.id === 1;
}

function deleteToDo(evnet) {
    //console.dir(event.target); target으로 원하는 버튼을 눌렀을때 해당 내용 출력
    const btn = event.target;   // 누른 타겟
    const li = btn.parentNode;  // 누른 타겟의 parentNode값 (li#1 등등)
    toDoList.removeChild(li);    // 누른 버튼의 li값을 지워라.
    const cleanToDos = toDos.filter(function(toDo){ //filter 함수가 하는것은 filterFn이 체크가된 아이템들에게 Array를 준다
         //return toDo.id !==li.id;  //으로 했을때 삭제가 안된다. console로 두개를 찍어보면 toDo.id는 숫자, li.id는 스트링이기 떄문이다.
         return toDo.id !== parseInt(li.id);  // parseInt는 스트링을 숫자로 바꾸어준다.
    });  
    console.log(cleanToDos);
    toDos = cleanToDos;
    saveToDos();
    
}


function saveToDos(){
    localStorage.setItem(TODOS_LS,JSON.stringify(toDos));
}

function paintToDo(text){
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const span = document.createElement("span");
  delBtn.innerHTML = "❌";
  delBtn.addEventListener("click",deleteToDo);
  const newId = toDos.length + 1;
  span.innerText = text;
  li.appendChild(span); //appendChild() 부모 영역에 넣는 함수
  li.appendChild(delBtn);
  li.id = newId;
  toDoList.appendChild(li);
  const toDoObj = {
    text: text,
    id: newId
    //const a = [1, 2, 3]; 
    // a.length는 배열의 길이를 알려줌
    // a.push(b) 배열 a에 b 삽입
  };
  toDos.push(toDoObj);
  saveToDos();
}

function handleSubmit(event){
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
}

function loadToDos(){
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if(loadedToDos !== null){
      const parsedToDos = JSON.parse(loadedToDos);
      parsedToDos.forEach(function(toDo){
          paintToDo(toDo.text);          
      })
  }
}

function init(){
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit)
}

init();