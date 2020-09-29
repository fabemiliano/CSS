const lang = navigator.language;
const date = new Date();
const dayNumber = date.getDate();
const monthNumber = date.getMonth();
const dayName = date.toLocaleDateString(lang, {weekday: 'long'});
const monthName = date.toLocaleDateString(lang, {month: 'long'});
const year = date.getFullYear();

document.getElementById('monthName').innerHTML = monthName;
document.getElementById('dayName').innerHTML= dayName;
document.getElementById('dayNumber').innerHTML= dayNumber;
document.getElementById('year').innerHTML= year;