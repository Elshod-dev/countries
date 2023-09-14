const modeBtn = document.querySelector(".header__dark-mode");
const body = document.querySelector("body");

const modeFromLocal = localStorage.getItem("mode")
  ? localStorage.getItem("mode")
  : null;
if (modeFromLocal == "dark") {
  body.classList.add("dark-mode");
} else if (modeFromLocal == "light") {
  body.classList.remove("dark-mode");
}
modeBtn.addEventListener("click", () => {
  const modeFromLocal = localStorage.getItem("mode")
    ? localStorage.getItem("mode")
    : null;
  if (modeFromLocal == null) {
    localStorage.setItem("mode", "dark");
    body.classList.add("dark-mode");
  } else if (modeFromLocal == "dark") {
    localStorage.setItem("mode", "light");
    body.classList.remove("dark-mode");
  } else {
    localStorage.setItem("mode", "dark");
    body.classList.add("dark-mode");
  }
});
