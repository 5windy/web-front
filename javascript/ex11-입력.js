// 브라우저에 알림창을 띄움
// alert('hello world!');

// 입력을 위한 프롬프트 창을 띄움
// ㄴ 사용하지 않음 
// ㄴ html/css 활용한 form을 통하여 입력 처리함
// const input = prompt('너의 이름은?');

// if(input) {
//     console.log(input);
//     console.log(typeof input);
// } else {
//     console.log('값이 존재하지 않습니다.');
// }

// 회원가입 처리 
// ㄴ group 배열 생성하고 
// ㄴ User 타입(class)의 객체를 저장 
// ㄴ 브라우저의 프롬프트 창을 통해 
// ㄴ 이름/아이디/연락처 를 받아 처리 
// ㄴ 중복 아이디에 대한 예외처리 
//    ㄴ 1) 회원가입 성공 메세지 알림창으로 띄우기
//    ㄴ 2) 실패 메세지 알림창으로 띄우기
// 가입한 회원의 정보만 -> 콘솔에 출력 

// 유효한 회원가입 5회 진행 

const group = [];

class User {
    #name;
    #username;
    #phone;

    constructor(name, username, phone) {
        this.#name = name;
        this.#username = username;
        this.#phone = phone;
    }

    getName = () => {
        return this.#name;
    }

    getUsername = () => this.#username;
    
    getPhone = () => this.#phone;

    toString = () => `{"name":"${this.#name}", "username":"${this.#username}", "phone":"${this.#phone}"}`;
}

const isValidPhone = (phone) => {
    const regex = /^\d{3}-\d{4}-\d{4}$/;
    return regex.test(phone);
}

const isValidUsername = (username) => {
    let isDupl = false;
    group.forEach(user => {
        if(username === user.getUsername()) {
            isDupl = true;
        }
    });
    return !isDupl;
}

const run = () => {
    for(let i=0; i<5; i++) {
        let name = prompt('이름을 입력하세요.');
        name = name ? name.trim() : name;
        
        let username = prompt('아이디를 입력하세요.');
        username = username ? username.trim() : username;
        
        let phone = prompt('휴대전화번호를 입력하세요. ###-####-####');
        phone = phone ? phone.trim() : phone;
    
        if(!name || !username || !phone) {
            alert('빈 값은 허용하지 않습니다.');
            i --;
            continue;
        }
    
        if(!isValidPhone(phone)) {
            alert('유효하지 않은 연락처 양식입니다.');
            i --;
            continue;
        }
        
        if(!isValidUsername(username)) {
            alert('이미 존재하는 아이디입니다.');
            i --;
            continue;
        }
    
        const user = new User(name, username, phone);
        group.push(user);
        
        alert('회원가입 성공!')
        const info = group[group.length - 1].toString();
        console.log(info);
        console.log(typeof info);
    
        const obj = JSON.parse(info);
        console.log(obj);
        console.log(typeof obj);
    }
};

run();