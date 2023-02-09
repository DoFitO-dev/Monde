const progress = document.querySelector('.progress-done');

setTimeout(() => {
  progress.style.width = progress.getAttribute('data-done') + '%';
  progress.style.opacity = 1;
  progress.style.font.size = 1;
}, 500)

var cursor = document.querySelector(".cursor");
var cursor2 = document.querySelector(".cursor2");

document.addEventListener("mousemove", function(e) {
  cursor.style.cssText = cursor2.style.cssText = "left:" + e.clientX + "px; top: " + e.clientY + "px;";
})

var menutgl = document.querySelector(".menu-toggler");
var nav = document.querySelector(".nav-links");

menutgl.addEventListener("click", () => {
  menutgl.classList.toggle("active");
  nav.classList.toggle("active");
})
