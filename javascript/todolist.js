class Todo {
    #isDone;
    #content;

    constructor(content="", isDone=false) {
        this.#content = content;
        this.#isDone = isDone;
    }

    get getIsDone() {
        return this.#isDone;
    }

    set setIsDone(isDone) {
        this.#isDone = isDone;
    }

    get getContent() {
        return this.#content;
    }

    set setContent(content) {
        this.#content = content;
    }

    // 1)
    toString = () => {
        return JSON.stringify(this.toJson());
    }

    // 2)
    toJson = () => {
        return {
            isDone : this.#isDone,
            content : this.#content
        }
    }
}

const createTodoListElement = (todo, code=0) => {
    const li = document.createElement("li");
    const div = document.createElement("div");
    const checkbox = document.createElement("input");
    const label = document.createElement("label");
    const img = document.createElement("img");
    const text = document.createElement("input");

    li.id = code === 0 ? "input" : `todo${code}`;
    checkbox.id = code === 0 ? "chk" : `chk${code}`;
    checkbox.type = "checkbox";
    label.for = code === 0 ? "chk" : `chk${code}`;
    img.className = "check-image";
    text.type = "text";
    text.value = todo.getContent;
    text.disabled = code !== 0;

    if(code === 0) {
        text.id = "input-content";
        text.placeholder = "오늘의 할 일";
        text.autofocus = true;
    }

    label.appendChild(img);

    div.appendChild(checkbox);
    div.appendChild(label);
    div.appendChild(text);

    li.appendChild(div);

    return li;
}

window.onload = () => {
    const todoList = document.getElementById("todo-list");
    const ul = todoList.querySelector("ul");
    const save = todoList.querySelector("#save");

    const list = [];

    // localStorage에 기존의 데이터가 있는지 확인 
    // ㄴ 데이터가 있으면 
    // ㄴ 오브젝트로 변환 후, 길이가 1 이상이면
    // ㄴ 데이터를 기반한 엘리먼트 그리기
    const localData = localStorage.getItem("todo-list");
    if(localData) {
        const tempList = JSON.parse(localData);     // [{},{},...]
        
        if(tempList.length > 0) {
            tempList.forEach((e, i) => {
                const todo = new Todo(e.content, e.isDone);
                list.push(todo);

                const li = createTodoListElement(todo, i + 1);
                ul.appendChild(li);
            });

            const sampleLi = document.getElementById("todo-sample");
            ul.removeChild(sampleLi);
        }
    }

    ul.addEventListener("click", e => {
        const target = e.target;
        if (target.type === "checkbox" && target.id !== "chk") {
            const message = target.checked ? "완료" : "미완료";
            alert(message);
        }
    });

    save.addEventListener("click", e => {
        const input = document.getElementById("input-content");
        const content = input.value;
        const isDone = document.getElementById("chk").checked;

        if (content) {
            const todo = new Todo(content, isDone);
            list.push(todo);

            const li = createTodoListElement(todo, list.length);
            ul.appendChild(li);

            let dataStr = "";
            const tempList = [];
            list.forEach(e => {
                tempList.push(e.toJson());
            });
            dataStr = JSON.stringify(tempList);

            localStorage.setItem("todo-list", dataStr);

            // 저장 처리 후, 인풋 박스 비워주기 
            input.value = "";
        }

        // ul.innerHTML = "";
        // ㄴ 이미 그려진 엘리먼트는 그대로 유지
        // ㄴ 필요한 엘리먼트만 변경 
        // ㄴ 마지막 #input 엘리먼트는 flex display 속성을 활용하여
        // ㄴ flex-end 위치에 고정

        // + localStrage 에 리스트를 저장

        // list.forEach((todo, index) => {
        //     const li = createTodoListElement(todo, index + 1);
        //     ul.appendChild(li);
        // });

        // const i = createTodoListElement(new Todo());
        // ul.appendChild(i);
    });
}