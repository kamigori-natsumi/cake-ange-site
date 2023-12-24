// 【カレンダーの日付取得】 ～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～
// カレンダーの年月を設定
let d = new Date();
let year = d.getFullYear();
let month = d.getMonth() + 1;

// カレンダーのタイトルを表示
document.getElementById('calendar-title').innerText = `${year}年 ${month}月`;

// カレンダーの日付を生成して挿入
const tableBody = document.querySelector('#calendar-table tbody');
let firstDay = new Date(year, month - 1, 1);
let lastDay = new Date(year, month, 0);
let daysInMonth = lastDay.getDate();

let dayCounter = 1;
let currentRow = document.createElement('tr');

for (let i = 0; i < firstDay.getDay(); i++) {
  currentRow.appendChild(document.createElement('td'));
}

while (dayCounter <= daysInMonth) {
  let cell = document.createElement('td');
  cell.innerText = dayCounter;

  // 水曜日を定休日に設定
  if (firstDay.getDay() === 3) {
    cell.classList.add('closed');
  }

  // 特定の日を臨時休業日に設定

  if (year === 2023 && month === 12 && dayCounter === 29) {
    cell.classList.add('special-closed');
  }
  if (year === 2023 && month === 12 && dayCounter === 30) {
    cell.classList.add('special-closed');
  }
  if (year === 2023 && month === 12 && dayCounter === 31) {
    cell.classList.add('special-closed');
  }

  currentRow.appendChild(cell);
  if (currentRow.children.length === 7) {
    tableBody.appendChild(currentRow);
    currentRow = document.createElement('tr');
  }

  dayCounter++;
  firstDay.setDate(firstDay.getDate() + 1);
}

// 最後の週の空白を埋める
for (let i = currentRow.children.length; i < 7; i++) {
  currentRow.appendChild(document.createElement('td'));
}

tableBody.appendChild(currentRow);

// swiper～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～
const swiper = new Swiper(".swiper", {
  loop: true,
  autoHeight: true,
  autoplay: {
    delay: 0,
  },
  speed: 6000,
  slidesPerView: 1,
  spaceBetween: 0,
  breakpoints: {
    350: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    500: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    900: {
      slidesPerView: 3,
      spaceBetween: 15,
    }
  }
});

// 【スクロール検知】～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～
const target = document.querySelector('.fadein1');
function observation1() {
  const targetRect = target.getBoundingClientRect();

  if (targetRect.top < window.innerHeight && targetRect.bottom >= 0) {
    target.classList.add('fadeinActive1');
  } else {
    target.classList.remove('fadeinActive1');
  }
};

window.addEventListener('scroll', observation1);


const target2 = document.querySelector('.fadein2');
function observation() {
  const targetRect = target2.getBoundingClientRect();

  if (targetRect.top < window.innerHeight && targetRect.bottom >= 0) {
    target2.classList.add('fadeinActive2');
  } else {
    target2.classList.remove('fadeinActive2');
  }
};

window.addEventListener('scroll', observation);


const target3 = document.querySelector('.fadein3');
function observation3() {
  const targetRect = target3.getBoundingClientRect();

  if (targetRect.top < window.innerHeight && targetRect.bottom >= 0) {
    target3.classList.add('fadeinActive3');
  } else {
    target3.classList.remove('fadeinActive3');
  }
};

window.addEventListener('scroll', observation3);


const target4 = document.querySelector('.itemsWrapper');
function observation4() {
  const targetRect = target4.getBoundingClientRect();

  if (targetRect.top < window.innerHeight && targetRect.bottom >= 0) {
    target4.classList.add('fadeinActive4');
  } else {
    target4.classList.remove('fadeinActive4');
  }
};

window.addEventListener('scroll', observation4);


const fadeInTarget = document.querySelectorAll('.fadeInTarget');

function observation5() {
  fadeInTarget.forEach(function (target) {
    const targetRect = target.getBoundingClientRect();
    if (targetRect.top < window.innerHeight && targetRect.bottom >= 0) {
      target.classList.add('animate__pulse');
    } else {
      target.classList.remove('animate__pulse');
    }
  });
};

window.addEventListener('scroll', observation5);

// ハンバーガーメニュー
const open=document.getElementById("open");
const overlay=document.querySelector(".overlay");
const close=document.getElementById("close");

open.addEventListener("click",()=>{
  overlay.classList.add("show");
  open.classList.add("hide");
});
  close.addEventListener("click",()=>{
    overlay.classList.remove("show");
    open.classList.remove("hide");
});

const modalOpen = document.getElementById("modalOpen");
const modalClose = document.getElementById("modalClose");
const modal = document.getElementById("modal");
const mask = document.getElementById("mask");

modalOpen.addEventListener("click", () => {
  modal.classList.remove("modalHidden");
  mask.classList.remove("modalHidden");
});

modalClose.addEventListener("click", () => {
  modal.classList.add("modalHidden");
  mask.classList.add("modalHidden");
});