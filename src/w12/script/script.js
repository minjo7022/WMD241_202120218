console.log("안녕하세요?");
// f12(개발자모드) 눌렀을 때 console에서 글자 볼 수 있음
let elemBody = document.body;
console.log(elemBody);
elemBody.style.backgroundColor = "oklch(0.7, 0.05, 0)";
// 색 쓸 때 무조건 '' 넣어줘야함
let aCard = document.querySelector(".card");
console.log(aCard);
// html엘레먼트.addEventListener("이벤트종류", function(){할일});
aCard.addEventListener("click", function () {
  console.log("클릭!");
});
// aCard.style.backgroundColor = "#ff0000";
aCard.classList.toggle("card--state-clicked");
console.log(aCard.classList);

// document.querySelectorAll(".card");
