const progress = document.querySelector('.progress-done');

setTimeout(() => {
  progress.style.width = progress.getAttribute('data-done') + '%';
  progress.style.opacity = 1;
  progress.style.font.size = 1;
}, 500)
