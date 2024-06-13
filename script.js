// '내 홈페이지'를 클릭했을 때 iframe에 기본 페이지 로드 및 높이 설정
function loadHomePageInIframe() {
    const iframe = document.querySelector('iframe[name="content-frame"]');
    iframe.src = "http://127.0.0.1:5501/home_effect/effect.html";
    setIframeHeight('home');
    showFooter();
}

// 페이지 유형에 따라 iframe 높이를 조정하는 함수
function setIframeHeight(pageType) {
    const iframe = document.querySelector('iframe[name="content-frame"]');
    iframe.className = ''; // 기존 클래스 제거
    if (pageType === 'home') {
        iframe.classList.add('home-page');
        showFooter();
    } else {
        iframe.classList.add('sub-page');
        hideFooter();
    }
}

// 푸터를 숨기는 함수
function hideFooter() {
    document.querySelector('footer').classList.add('hidden');
}

// 푸터를 보이게 하는 함수
function showFooter() {
    document.querySelector('footer').classList.remove('hidden');
}
