document.querySelector('body').addEventListener('mousemove', () => {
  let eye = document.querySelectorAll('.eye')
  // console.log(eye)
  eye.forEach(e => {
    let x = e.getBoundingClientRect().left + e.clientWidth / 2;
    let y = e.getBoundingClientRect().top + e.clientHeight / 2;
    let radian = Math.atan2(event.pageX - x, event.pageY - y);
    let rot = (radian * (180 / Math.PI) * - 1) + 270;
    e.style.transform = "rotate(" + rot + "deg"
    console.log(e.getBoundingClientRect().left, e.clientWidth, e.getBoundingClientRect().top, e.clientHeight)
  })
})