//clock
const angle = 6;
const hour = document.querySelector("#hour");
const min = document.querySelector("#min");
const sec = document.querySelector("#sec");
//changeColor
const changeColor = document.querySelector("#change__color");

//dial
const dialBox = document.querySelector(".dial__box");
const dial = document.querySelector(".dial");

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
  for (let i = 1; i < count; i++) {
    let newElDial = document.createElement("div");
    newElDial.classList.add("dial", "colorMode");
    newElDial.style.transform = `rotateZ(${i * angle}deg)`;
    dialBox.appendChild(newElDial);
  }
}

createDial(12);
