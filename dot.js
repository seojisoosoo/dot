//클릭하는 순간 검은색으로 변경
//선 -> 점 검은색으로 변하자마자 나오게
//일기 확인버튼을 누르면 효과나오기(일기장 페이지에서 연결)->그럴려면 한 페이지에서 해야할 것 같기도...
//점이 회색이면 일기 쓰는 페이지로 연결, 검은색이면 작성한 페이지로 연결
// const canvas = document.querySelector("canvas");
// var context = canvas.getContext("2d");
// context.strokeStyle = "black";
// context.lineWidth = 5;

function click1() {
  const dot1 = document.querySelector("#dot1");
  const currentColor = dot1.style.backgroundColor;
  let newColor;
  if (currentColor != "black") {
    newColor = "black";
  } else {
    //다음페이지 나오게 -> html에 연결해두고 display:none해놨다가 display:block으로 변경하자
  }
  dot1.style.backgroundColor = newColor;
}

function click2() {
  const dot2 = document.querySelector("#dot2");
  const currentColor = dot2.style.backgroundColor;
  let newColor;
  if (currentColor != "black") {
    newColor = "black";
    //선
    const canvas = document.querySelector("#onetwo");
    var context = canvas.getContext("2d");
    context.strokeStyle = "black";
    context.lineWidth = 3;

    context.beginPath();
    context.moveTo(3, 35);
    context.lineTo(9, 0);
    context.stroke();
  } else {
    //다음페이지 나오게 -> html에 연결해두고 display:none해놨다가 display:block으로 변경하자
  }
  dot2.style.backgroundColor = newColor;
}
function click3() {
  const dot3 = document.querySelector("#dot3");
  const currentColor = dot3.style.backgroundColor;
  let newColor;
  if (currentColor != "black") {
    newColor = "black";
    //선
    const canvas = document.querySelector("#twothree");
    var context = canvas.getContext("2d");
    context.strokeStyle = "black";
    context.lineWidth = 3;

    context.beginPath();
    context.moveTo(0, 25);
    context.lineTo(25, 3);
    context.stroke();
  } else {
    //다음페이지 나오게 -> html에 연결해두고 display:none해놨다가 display:block으로 변경하자
  }
  dot3.style.backgroundColor = newColor;
}
function click4() {
  const dot4 = document.querySelector("#dot4");
  const currentColor = dot4.style.backgroundColor;
  let newColor;
  if (currentColor != "black") {
    newColor = "black";
    //선
    const canvas = document.querySelector("#threefour");
    var context = canvas.getContext("2d");
    context.strokeStyle = "black";
    context.lineWidth = 3;

    context.beginPath();
    context.moveTo(0, 3);
    context.lineTo(35, 18);
    context.stroke();
  } else {
    //다음페이지 나오게 -> html에 연결해두고 display:none해놨다가 display:block으로 변경하자
  }
  dot4.style.backgroundColor = newColor;
}
function click5() {
  const dot5 = document.querySelector("#dot5");
  const currentColor = dot5.style.backgroundColor;
  let newColor;
  if (currentColor != "black") {
    newColor = "black";
    //선
    const canvas = document.querySelector("#fourfive");
    var context = canvas.getContext("2d");
    context.strokeStyle = "black";
    context.lineWidth = 3;

    context.beginPath();
    context.moveTo(0, 0);
    context.lineTo(10, 25);
    context.stroke();
  } else {
    //다음페이지 나오게 -> html에 연결해두고 display:none해놨다가 display:block으로 변경하자
  }
  dot5.style.backgroundColor = newColor;
}
