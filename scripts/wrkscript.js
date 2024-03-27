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

const filled = document.querySelector('.filled');

function update () {
  filled.style.width= `${((window.scrollY) / (document.body.scrollHeight - window.innerHeight) * 100)}%`
  requestAnimationFrame(update);
}

update();