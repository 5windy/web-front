window.onload = () => {
    const root = document.getElementById("root");
    console.log('root: ', root);
    
    // 자바스크립트로 요소(Element)를 생성하는 방법
    // 1) innerHTML 을 활용 
    root.innerHTML += `<button>My button</button>`;

    // 2) document.createElement() 활용
    const paragraph = document.createElement("p");
    paragraph.className = "content";
    paragraph.id = "con1";
    paragraph.innerText = "Hello world";
    paragraph.style.color = "red";

    // *생성한 엘리먼트를 부모 요소에 추가(확장)를 해야함
    // root.appendChild(paragraph);
    root.append(paragraph); // * jQuery에서의 append는 텍스트 태그를 파싱하여 요소로 생성해줌 (차이점)

    // 5*5 맵을 root 부모 엘리먼트 자식 요소 안의 map 영역 안에 그리기 
    // <div id="map"><div id="box1" class="box"></div>... </div>

    // 랜덤 값 추출 
    // Math.floor(Math.random() * (max - min + 1)) + min
    // ㄴ 중복 없이 25개를 1~50범위 안에서 선별하여 -> map의 각 box의 innerText로 초기화
    const rNum = Math.floor(Math.random() * 10) + 1;

    // 1. 중복없는 숫자 25개를 확보 
    const nums = [];
    for(let i=0; i<25; i++) {
        const number = Math.floor(Math.random() * 50) + 1;

        let isDupl = false;
        for(let j=0; j<i; j++) {
            if(number === nums[j]) {
                isDupl = true;
                break;
            }
        }

        if(isDupl) {
            i --;
        } else {
            nums.push(number);
        }
    }

    // 2. map 엘리먼트 만들기 
    const map = document.createElement("div");
    map.id = "map";
    map.style.display = "flex";
    map.style.width = "50vw";
    map.style.height = "50vw";
    map.style.minWidth = "200px";
    map.style.minHeight = "200px";
    map.style.maxWidth = "500px";
    map.style.maxHeight = "500px";
    map.style.flexWrap = "wrap";
    map.style.gap = "5px";
    map.style.margin = "200px auto auto auto";

    // 3. box 엘리먼트 만들기 -> map에 추가
    for(let i=0; i<nums.length; i++) {
        const box = document.createElement("div");
        box.className = "box";
        box.style.display = "flex";
        box.style.justifyContent = "center";
        box.style.alignItems = "center";
        box.style.width = "calc(20% - 5px)";
        box.style.height = "calc(20% - 5px)";
        box.style.color = "white";
        box.style.backgroundColor = "#4466AA";
        box.innerText = nums[i];

        map.appendChild(box);
    }

    // 4. 완성된 map을 root에 추가
    root.appendChild(map);
}