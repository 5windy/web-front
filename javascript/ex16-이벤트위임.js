class Todo {

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

}