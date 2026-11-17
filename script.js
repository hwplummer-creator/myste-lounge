// Close the hamburger menu after a link is tapped, on outside click, or with Escape.
(function () {
  var menu = document.querySelector('details.menu');
  if (menu) {
    menu.addEventListener('click', function (e) {
      if (e.target.closest('nav a')) menu.removeAttribute('open');
    });
    document.addEventListener('click', function (e) {
      if (menu.hasAttribute('open') && !menu.contains(e.target)) menu.removeAttribute('open');
    });
    menu.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        menu.removeAttribute('open');
        menu.querySelector('summary').focus();
      }
    });
  }
  // "Start an inquiry" pre-selects the topic in the contact form.
  document.querySelectorAll('[data-topic]').forEach(function (link) {
    link.addEventListener('click', function () {
      var sel = document.getElementById('topic');
      if (sel) sel.value = link.getAttribute('data-topic');
    });
  });
  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();
