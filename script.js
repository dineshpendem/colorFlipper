function randColor() {
  let color = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
  ];
  let random =
    "#" +
    color[randomNumber()] +
    color[randomNumber()] +
    color[randomNumber()] +
    color[randomNumber()] +
    color[randomNumber()] +
    color[randomNumber()];
  document.body.style.backgroundColor = random;
  document.getElementById("color").textContent = random;
}
function randomNumber() {
  return Math.floor(Math.random() * 16);
}
let interval;
function startDisco() {
  interval = setInterval(randColor, Infinity);
  document.getElementById("end").style.display = "inline-block";

  document.getElementById("start").style.display = "none";
  return interval;
}
function go() {
  alert(
    "Note: Disco lights animation may effect your eye. Do you want to continue?"
  );
  document.getElementById("title").textContent = "Disco Lights";
  document.getElementById("color").style.display = "none";
  document.getElementById("text").style.display = "none";
  document.getElementById("change").style.display = "none";
  document.getElementById("go").style.display = "none";
  document.getElementById("back").style.display = "inline-block";
  document.getElementById("start").style.display = "inline-block";
  document.getElementById("end").style.display = "none";
}
function stopDisco() {
  document.getElementById("start").style.display = "inline-block";
  document.getElementById("end").style.display = "none";
  return clearInterval(interval);
}
function goBack() {
  stopDisco();
  document.getElementById("color").style.display = "block";
  document.getElementById("text").style.display = "block";
  document.getElementById("change").style.display = "block";
  document.getElementById("go").style.display = "block";
  document.getElementById("color").textContent = "#ffffff";
  document.getElementById("start").style.display = "none";
  document.getElementById("end").style.display = "none";
  document.getElementById("back").style.display = "none";
  document.body.style.backgroundColor = "#fff";
  document.getElementById("title").textContent = "Random Color Generator";
}
