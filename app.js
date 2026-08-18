const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");

menuBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  sidebar.classList.toggle("active");
});

document.addEventListener("click", (e) => {

  if (
    sidebar.classList.contains("active") &&
    !sidebar.contains(e.target) &&
    e.target !== menuBtn
  ) {
    sidebar.classList.remove("active");
  }

});
