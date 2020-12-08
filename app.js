const colors = ["green", "red", "rgba(133,122,200)","#222", "#f15025"];
const button =document.getElementById('btn');
const span =document.querySelector('.color');
button.addEventListener("click", function () {
  const randomNumber = getRandomNumber();
  // console.log(randomNumber);

  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}