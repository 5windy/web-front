class Todo {
    #isDone;
    #content;

    constructor(content, isDone) {
        this.#content = content;
        this.#isDone = isDone;
    }

    // getIsDone = () => this.#isDone;

    // get 또는 set 키워드로 만든 getter와 setter는 내부적으로는 메소드로 동작을 하지만 
    // 사용을 할 때에는 마치 속성값을 초기화하거나 얻는 것처럼 사용을 함
    get getIsDone() {
        return this.#isDone;
    }   
    
    set setIsDone(isDone) {
        this.#isDone = isDone;
    }
}

window.onload = () => {
    // 이벤트 위임 Event Delegation 
    // ㄴ 버블링 활용한 이벤트의 위임 처리

    // 1. 체크 박스에 클릭 이벤트가 발생하면 -> 완료/미완료 메세지를 alert()
    // 2. 저장 버튼을 누르면 
    // ㄴ 배열에 저장된 todo의 상태를 element로 반영
    // ㄴ 추가된 todo가 있으면 배열에 추가 및 element로 반영
    // 3. class Todo 정의하여 관리 

    const list = [];

    const todoList = document.getElementById("todo-list");
    console.log(todoList);
    
    const ul = todoList.querySelector("ul");
    console.log(ul);

    const save = todoList.querySelector("#save");

    ul.addEventListener("click", e => {
        const target = e.target;

    });

    save.addEventListener("click", e => {
        // 1. input element의 아이디 input-contnet 영역 안에 있는 value를 가져와 
        // 2. value가 빈 문자열이 아니면 
        // 3. 아이디 chk로부터 checked 속성 값도 변수로 저장 한 후,
        // 4. Todo 객체를 생성
        // 5. list 배열에 추가한 후, 
        // 6. list 배열의 내용을 기반으로 ul 영역안에 li 엘리먼트 추가
        // ㄴ 그리기 전, ul의 innterHTML 을 모두 삭제

        const todo = new Todo("오늘의 할 일", false);
        todo.setIsDone = true;
        console.log(todo.getIsDone);
    });
}