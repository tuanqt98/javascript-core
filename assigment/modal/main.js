const modal = document.querySelector(".modal");
console.log(modal);
if (modal) {
  setTimeout(() => {
    modal.classList.add("is-shown");
  }, 3000);
}
