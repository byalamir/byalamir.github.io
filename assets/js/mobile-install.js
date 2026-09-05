(function () {
  'use strict';

  var isStandalone = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;
  var isMobileViewport = window.matchMedia('(max-width: 900px)').matches;
  if (isStandalone || !isMobileViewport) return;

  var dismissalKey = 'byalamir-install-banner-dismissed-at';
  var dismissalWindow = 7 * 24 * 60 * 60 * 1000;

  try {
    var dismissedAt = Number(window.localStorage.getItem(dismissalKey));
    if (dismissedAt && Date.now() - dismissedAt < dismissalWindow) return;
  } catch (error) {
    // If storage is unavailable, simply show the banner normally.
  }

  function detectPlatform() {
    var ua = navigator.userAgent || '';
    var platform = navigator.platform || '';
    var maxTouchPoints = navigator.maxTouchPoints || 0;
    var isIOS = /iPad|iPhone|iPod/.test(ua) || (platform === 'MacIntel' && maxTouchPoints > 1);
    var isAndroid = /Android/i.test(ua);

    if (isIOS) return 'ios';
    if (isAndroid) return 'android';
    return 'unknown';
  }

  var platform = detectPlatform();
  var banner = document.createElement('aside');
  banner.className = 'mobile-install-banner';
  banner.setAttribute('aria-label', 'Save BY ALAMIR to your home screen');
  banner.innerHTML = [
    '<div class="mobile-install-copy">',
      '<span class="mobile-install-eyebrow">KEEP BY ALAMIR CLOSE</span>',
      '<p class="mobile-install-text">Save this site to your home screen.</p>',
    '</div>',
    '<button class="mobile-install-how" type="button">How to ↗</button>',
    '<button class="mobile-install-close" type="button" aria-label="Dismiss home-screen tip">×</button>'
  ].join('');

  var overlay = document.createElement('div');
  overlay.className = 'mobile-install-overlay';
  overlay.setAttribute('aria-hidden', 'true');
  overlay.innerHTML = [
    '<section class="mobile-install-modal" role="dialog" aria-modal="true" aria-labelledby="mobile-install-title">',
      '<div class="mobile-install-modal-head">',
        '<div>',
          '<span class="mobile-install-modal-kicker">MOBILE APP</span>',
          '<h2 id="mobile-install-title">Add BY ALAMIR to your home screen.</h2>',
        '</div>',
        '<button class="mobile-install-modal-close" type="button" aria-label="Close instructions">×</button>',
      '</div>',
      '<div class="mobile-install-instructions"></div>',
    '</section>'
  ].join('');

  function instructionMarkup() {
    var ios = [
      '<h3>iPhone / iPad</h3>',
      '<ol>',
        '<li>Open BY ALAMIR in Safari.</li>',
        '<li>Tap the Share button.</li>',
        '<li>Choose <strong>Add to Home Screen</strong>.</li>',
        '<li>Tap <strong>Add</strong>.</li>',
      '</ol>'
    ].join('');

    var android = [
      '<h3>Android</h3>',
      '<ol>',
        '<li>Open BY ALAMIR in Chrome.</li>',
        '<li>Tap the three-dot menu.</li>',
        '<li>Choose <strong>Add to Home screen</strong> or <strong>Install app</strong>.</li>',
        '<li>Confirm <strong>Add</strong> or <strong>Install</strong>.</li>',
      '</ol>'
    ].join('');

    var note = '<p class="mobile-install-note">Menu wording can vary slightly by browser version. Once installed, BY ALAMIR opens with its own home-screen icon and standalone app-style view where supported.</p>';

    if (platform === 'ios') return ios + note;
    if (platform === 'android') return android + note;
    return ios + android + note;
  }

  overlay.querySelector('.mobile-install-instructions').innerHTML = instructionMarkup();
  document.body.appendChild(banner);
  document.body.appendChild(overlay);

  var howButton = banner.querySelector('.mobile-install-how');
  var dismissButton = banner.querySelector('.mobile-install-close');
  var modalClose = overlay.querySelector('.mobile-install-modal-close');
  var previousFocus = null;

  function openModal() {
    previousFocus = document.activeElement;
    overlay.classList.add('is-open');
    overlay.setAttribute('aria-hidden', 'false');
    document.body.classList.add('install-modal-open');
    modalClose.focus();
  }

  function closeModal() {
    overlay.classList.remove('is-open');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('install-modal-open');
    if (previousFocus && typeof previousFocus.focus === 'function') previousFocus.focus();
  }

  function dismissBanner() {
    banner.classList.remove('is-visible');
    try {
      window.localStorage.setItem(dismissalKey, String(Date.now()));
    } catch (error) {
      // Dismiss for the current page even if storage is unavailable.
    }
    window.setTimeout(function () {
      if (banner.parentNode) banner.parentNode.removeChild(banner);
    }, 240);
  }

  howButton.addEventListener('click', openModal);
  dismissButton.addEventListener('click', dismissBanner);
  modalClose.addEventListener('click', closeModal);

  overlay.addEventListener('click', function (event) {
    if (event.target === overlay) closeModal();
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && overlay.classList.contains('is-open')) closeModal();
  });

  window.setTimeout(function () {
    banner.classList.add('is-visible');
  }, 1200);
}());
