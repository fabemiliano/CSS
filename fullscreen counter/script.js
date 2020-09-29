$(document).ready(function() {
  let count = 0;
  let counter = setInterval(function() {
    if (count < 101) {
      $('.count').text(`${count}%`);
      $('.loader').width(`${count}%`)
      count += 1;
    } else {
      clearInterval(counter)
    }
  }, 100)
})