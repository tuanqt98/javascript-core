const tabItems = document.querySelectorAll(".tab-item");
const tabContents = document.querySelectorAll(".tab-content");
tabItems.forEach((item) => {
  item.addEventListener("click", handleClickTab);
});
function handleClickTab(event) {
  // console.log(event.target);
  [...tabItems].forEach((item) => item.classList.remove("active"));
  event.target.classList.add("active");
  // console.log([...tabItems]);
  const tabNumber = +event.target.dataset.tab;
  console.log(typeof tabNumber);
  [...tabContents].forEach((item) => item.classList.remove("active"));
  [...tabContents][tabNumber - 1].classList.add("active");
}
