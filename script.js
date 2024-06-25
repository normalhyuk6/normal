// 페이지 유형에 따라 iframe 높이를 조정하는 함수
function setIframeHeight(pageType) {
    const iframe = document.querySelector('iframe[name="content-frame"]'); // iframe 요소 선택
    iframe.className = ''; // 기존 클래스 제거
    if (pageType === 'home') {
        iframe.classList.add('home-page'); // 홈 페이지 클래스 추가
    } else if (pageType === 'type') {
        iframe.classList.add('type-page'); // 종류 페이지 클래스 추가
    } else if (pageType === 'about') {
        iframe.classList.add('about-page'); // 어바웃 페이지 클래스 추가
    } else {
        iframe.classList.add('sub-page'); // 서브 페이지 클래스 추가
    }
}

// '홈' 또는 '종류'를 클릭했을 때 iframe 내용을 로드하는 함수
function loadIframeContent(pageType, url) {
    const iframe = document.querySelector('iframe[name="content-frame"]'); // iframe 요소 선택
    iframe.src = url; // iframe의 src 속성 설정
    setIframeHeight(pageType); // 페이지 유형에 따라 높이 설정
}
