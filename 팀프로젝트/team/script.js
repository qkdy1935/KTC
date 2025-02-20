let prevScrollPos = window.pageYOffset; // 이전 스크롤 위치
const header = document.querySelector(".header"); // 헤더 요소 선택

window.onscroll = function () {
  let currentScrollPos = window.pageYOffset; // 현재 스크롤 위치

  // 스크롤이 내려갈 때는 헤더를 숨기고, 올릴 때는 헤더를 다시 표시
  if (prevScrollPos > currentScrollPos) {
    // 스크롤을 올리면 헤더가 보이도록
    header.style.top = "0";
  } else {
    // 스크롤을 내리면 헤더를 숨기도록
    header.style.top = "-60px"; // 헤더 높이만큼 숨깁니다.
  }

  prevScrollPos = currentScrollPos; // 현재 스크롤 위치를 이전 위치로 업데이트
};
