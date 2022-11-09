const angle = 6;
const hour = document.querySelector("#hour");
const min = document.querySelector("#min");
const sec = document.querySelector("#sec");
const changeColor = document.querySelector("#change__color");
const darkMode = document.querySelectorAll(".colorMode");

setInterval(() => {
  let day = new Date();
  let hh = day.getHours() * 30;
  let mm = day.getMinutes() * angle;
  let ss = day.getSeconds() * angle;

  hour.style.transform = `rotateZ(${hh + mm / 12}deg)`;
  min.style.transform = `rotateZ(${mm}deg)`;
  sec.style.transform = `rotateZ(${ss}deg)`;
}, 1000);

changeColor.addEventListener("click", () => {
  // console.log(darkMode);
  darkMode.forEach((el) => {
    el.classList.toggle("darkMode");
  });
});
