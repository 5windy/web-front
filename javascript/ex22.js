// Promise 기반의 대표적인 Fetch API 
// ㄴ 외부 데이터를 HTTP 통신을 통하여 가져오는 기술 
// ㄴ ex) Open API(Application Programming Interface)를 통한 데이터 수신 및 가공

window.onload = () => {
    const REST_API_KEY = "ae6679f92a630af03e8a8b9caaee8b79";
    
    const fetchWebData = async () => {
        const result = await fetch("https://dapi.kakao.com/v2/search/web?query=달고나커피&sort=recency&page=2&size=50", {
            method: "GET",
            headers: {
                "Authorization" : `KakaoAK ${REST_API_KEY}`
            }
        });
        const body = await result.json();
        console.log(body);
    }

    fetchWebData();
}
