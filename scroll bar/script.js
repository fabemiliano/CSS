const progressbar = document.getElementById('progressbar');
const percent = document.getElementById('percent');
const totalHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = function() {
  const progress = window.pageYOffset / totalHeight * 100;
  console.log(progress)
  progressbar.style.height = progress + '%';
  percent.innerHTML = "Page Scrolled" + Math.round(progress) + '%';
}