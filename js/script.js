//clock
const angle = 6;
const hour = document.querySelector("#hour");
const min = document.querySelector("#min");
const sec = document.querySelector("#sec");
//changeColor
const changeColor = document.querySelector("#change__color");

//dial
const dialBox = document.querySelector(".dial__box");
const numberBox = document.querySelector(".number__box");

//clock
setInterval(() => {
  let day = new Date();
  let hh = day.getHours() * 30;
  let mm = day.getMinutes() * angle;
  let ss = day.getSeconds() * angle;

  hour.style.transform = `rotateZ(${hh + mm / 12}deg)`;
  min.style.transform = `rotateZ(${mm}deg)`;
  sec.style.transform = `rotateZ(${ss}deg)`;
}, 1000);

//changeColor
changeColor.addEventListener("click", () => {
  const darkMode = document.querySelectorAll(".colorMode");
  darkMode.forEach((el) => {
    el.classList.toggle("darkMode");
  });
});

//dial
function createDial(count) {
  let angle = 360 / count;
  for (let i = 0; i < count; i++) {
    //create block for dial lines
    let newElDial = document.createElement("div");
    //add styles
    newElDial.classList.add("dial", "colorMode");
    //rotate dial lines
    newElDial.style.transform = `rotateZ(${i * angle}deg)`;
    //add line blocks in DOM
    dialBox.appendChild(newElDial);
    //create block for numbers
    let newNumb = document.createElement("div");
    let boxNumber = document.createElement("div");
    //add styles
    newNumb.classList.add("numb", "colorMode");
    boxNumber.classList.add("boxNumber", "colorMode");
    if (i == 0) {
      boxNumber.innerHTML = 12;
    } else {
      boxNumber.innerHTML = i;
    }
    newNumb.style.transform = `rotateZ(${i * angle}deg)`;
    boxNumber.style.transform = `rotateZ(${-i * angle}deg)`;
    numberBox.appendChild(newNumb);
    newNumb.appendChild(boxNumber);
  }
}

createDial(12);
