// Grind Setters — small interactions only. All content lives in index.html.
(function () {
  // ----- Watch BG video popup -----
  var modal = document.getElementById('watch-bg');
  var video = modal ? modal.querySelector('video') : null;
  var opener = null;

  function openVideo(e) {
    opener = e.currentTarget;
    modal.hidden = false;
    document.body.classList.add('modal-open');
    modal.querySelector('.video-modal__close').focus();
    if (video) {
      var p = video.play();
      if (p && p.catch) p.catch(function () {});
    }
  }

  function closeVideo() {
    if (modal.hidden) return;
    if (video) video.pause();
    modal.hidden = true;
    document.body.classList.remove('modal-open');
    if (opener) opener.focus();
  }

  if (modal) {
    document.querySelectorAll('[data-open-video]').forEach(function (b) { b.addEventListener('click', openVideo); });
    modal.querySelectorAll('[data-close-video]').forEach(function (b) { b.addEventListener('click', closeVideo); });
    modal.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeVideo(); });
  }

  // ----- Hero background: make sure the muted loop starts on mobile -----
  var hero = document.querySelector('.hero__media video');
  if (hero) {
    hero.muted = true;
    var hp = hero.play();
    if (hp && hp.catch) hp.catch(function () {});
  }

  // ----- Footer year -----
  var y = document.querySelector('[data-year]');
  if (y) y.textContent = new Date().getFullYear();
})();
