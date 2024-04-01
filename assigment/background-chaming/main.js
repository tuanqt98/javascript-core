const btn = document.querySelector(".comic-button");
btn.addEventListener("click", handleChangeColor);
colors = ["#FF0000", "#00FF00", "#FF00FF", "#FFFF00", "#FF6666"];
function handleChangeColor() {
  const color = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = color;
}
