/**
  * 애니메이션을 재시작하기 위한 스크립트
*/

// 버튼 요소 선택
const button = document.querySelector('button');

// 애니메이션을 재시작하는 함수
const restart = () => {
  // 애니메이션이 적용된 블록 요소 선택
  const blocks = document.querySelector('.block-reveal');
  
  // 블록 요소를 복제
  const newBlocks = blocks.cloneNode(true);
  
  // 기존 블록 요소 제거
  document.body.removeChild(blocks);
  
  // 복제한 블록 요소 추가
  document.body.appendChild(newBlocks);
};

// 버튼 클릭 시 애니메이션 재시작 함수 실행
button.addEventListener('click', restart);
