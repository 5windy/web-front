// 문제) 
// localStorage & sessionStorage와 같이
// setItem()
// getItem()
// removeItem()
// 메소드를 만들어보자

export const setItem = (name, value, sec) => {
    // 쿠키 저장 
    document.cookie = `${name}=${value}; path=/; max-age=${sec};`;
}

export const getItem = (name) => {
    // 문자열 파싱
    // ㄴ name1=value1; name2=value2; ...
    const cookie = document.cookie;

    let result = "";

    // 방법 2)
    const data = cookie.split(/=|(?:; )/);
    for(let i=0; i<data.length; i+=2) {
        if(data[i] === name)
            result = data[i + 1];
    }

    // 방법 1) 
    // const data = cookie.split("; ");
    // data.forEach(e => {
    //     const info = e.split("=");

    //     if(name === info[0])
    //         result = info[1];
    // });

    return result;
}

export const removeItem = (name) => {
    // 만료 시간을 "현재 시간"으로 지정하면 삭제가 됨
    document.cookie = `${name}=; path=/; max-age=0;`;
}