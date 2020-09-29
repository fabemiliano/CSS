const hr = document.getElementById('hr');
const mn = document.getElementById('mn');
const sc = document.getElementById('sc');
const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const second = document.getElementById('second');

setInterval(() => {
  const date = new Date();
  const hh = date.getHours() * 30;
  const mm = date.getMinutes() * 6;
  const ss = date.getSeconds() * 6;
  let scs = date.getSeconds();
  let mins = date.getMinutes();
  let hrs = date.getHours();
  scs = (scs < 10) ? `0${scs}` : scs
  mins = (mins < 10) ? `0${mins}` : mins
  hrs = (hrs < 10) ? `0${hrs}` : hrs
  hr.style.transform = `rotatez(${hh + (mm / 12)}deg`;
  mn.style.transform = `rotatez(${(mm)}deg`;
  sc.style.transform = `rotatez(${ss}deg`;
  hour.innerHTML = hrs + ':';
  minute.innerHTML = mins + ':';
  second.innerHTML = scs;
}, 1000)