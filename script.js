// '내 홈페이지'를 클릭했을 때 iframe에 기본 페이지 로드 및 높이 설정
function loadHomePageInIframe() {
    const iframe = document.querySelector('iframe[name="content-frame"]');
    iframe.src = "http://127.0.0.1:5501/dist/index.html"; // '내 홈페이지' URL 설정
    setIframeHeight('home'); // '내 홈페이지'에 대한 높이 설정
    showFooter(); // 푸터 표시
}

// 페이지 유형에 따라 iframe 높이를 조정하는 함수
function setIframeHeight(pageType) {
    const iframe = document.querySelector('iframe[name="content-frame"]');

    // 기존의 모든 유형의 클래스를 제거
    iframe.classList.remove('home-page', 'other-page', 'sub-page');

    // 페이지 유형에 따라 새로운 클래스를 추가하여 높이 설정
    if (pageType === 'home') {
        iframe.classList.add('home-page'); // '내 홈페이지'의 경우
        showFooter(); // 푸터 표시
    } else if (pageType === 'sub-page') {
        iframe.classList.add('sub-page'); // '홈' 또는 '서비스'의 하위 항목의 경우
        hideFooter(); // 푸터 숨김
    } else {
        iframe.classList.add('other-page'); // '소개'의 경우
        hideFooter(); // 푸터 숨김
    }
}

// 푸터를 숨기는 함수
function hideFooter() {
    const footer = document.querySelector('footer');
    footer.classList.add('hidden'); // 'hidden' 클래스를 추가하여 푸터 숨김
}

// 푸터를 보이게 하는 함수
function showFooter() {
    const footer = document.querySelector('footer');
    footer.classList.remove('hidden'); // 'hidden' 클래스를 제거하여 푸터 표시
}

// iframe의 콘텐츠가 로드될 때 높이를 조정하는 이벤트 핸들러를 설정
document.querySelectorAll('nav a[target="content-frame"]').forEach(link => {
    link.addEventListener('click', event => {
        const pageType = event.target.getAttribute('onclick').match(/'(\w+)'/)[1];
        setIframeHeight(pageType); // 클릭된 링크의 페이지 유형에 따라 높이 조정
    });
});
