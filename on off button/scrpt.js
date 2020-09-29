

// document.querySelector('.theme-toggle-button').addEventListener('click',  () => {
//   document.body.classList.toggle('dark')
// })

// document.getElementById('switcher').addEventListener('click', () => {
//   document.getElementById('switcher').checked
//   ? document.getElementById('switcher-label').innerText = 'Switch to Light Mode'
//   : document.getElementById('switcher-label').innerText = 'Switch to Dark Mode'
// })


$(document).ready(function() {
  $('#switcher').click(function() {
      $('#switcher').is(':checked')
      ?$('#switcher-label').text('Switch to Dark Mode')
      :$('#switcher-label').text('Switch to Light Mode');
  $('body').toggleClass('dark')
  });
})