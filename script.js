'use strict';

// Productの画像をふわっと動かす
const targetElement = document.querySelectorAll(".animationTarget");

// console.log("画面の高さ", window.innerHeight);

document.addEventListener("scroll", function() {
  for (let i = 0; i < targetElement.length; i++) {
    const getElementDistance = targetElement[i].
    getBoundingClientRect().top + targetElement[i].clientHeight * .7
    if (window.innerHeight > getElementDistance) {
      targetElement[i].classList.add("show");
    }
  }
});


// Homeの画像を1秒ずつ切り替える
const img = ["img/yoito15-2.png", "img/yoito23-2.png", "img/yoito1-2.png"];

let count = -1;

picChange();

function picChange() {

  count++;
  // カウントが最大になれば初期値に戻す
  if (count == img.length) count = 0;
  //画像選択
  pic.src = img[count];
  // 1秒ごとに実行
  setTimeout("picChange()", 5000);
}


// Scroll消す(作成途中です。)

// const scrollTaget = document.querySelectorAll(".scroll")[0];
// scrollTaget.addEventListener("scroll", deleteScroll);

// function deleteScroll(word) {
//   return word.innerHTML = "";
// }




































