promoBox({
  imagePath: 'images/portfolio/salon/salon-small.jpeg',
  link: 'https://kappersactie.vrijetijd.nl/order?lid=1009',
  target: '_blank',
  disableOverlay: false,
  disableOverlayClose: false,
  disableStyles: false,
  disableCloseButton: false,
  disableKeyClose: false,
  promotionText: "Kruitvat actie, kappersbon 14,99",
  closeButtonText: '',
  deleteCookieOnUrl: '#clear',
  fadeInDuration: 0.5,
  fadeOutDuration: 0.2,
  loadDelay: 0.1,
  autoCloseSeconds: 30
});

var demoImage = 'https://raw.githubusercontent.com/rolandtoth/promoBox/master/breeze.jpg';

document.getElementById('startPromo').onclick = function () {
  promoBox({
    imagePath: demoImage,
    closeButtonText: 'close',
    fadeInDuration: 0.33,
    fadeOutDuration: 0.2
  });
  return false;
};

document.getElementById('startActionButtons').onclick = function () {
  promoBox({
    imagePath: demoImage,
    fadeInDuration: 0.33,
    fadeOutDuration: 0.2,
    actionButtons: [
      ['Visit GitHub', 'https://github.com/rolandtoth/promoBox', '_blank', 'external github'],
      ['Jump to anchor', '#anchor', '', 'jumpLink'],
      ['Cancel']
  ]
  });
  return false;
};

document.getElementById('startDelayed').onclick = function () {
  promoBox({
    imagePath: demoImage,
    fadeInDuration: 0.33,
    fadeOutDuration: 0.2,
    loadDelay: 2
  });
  return false;
};

document.getElementById('startInterstitial').onclick = function () {
  promoBox({
    imagePath: demoImage,
    fadeInDuration: 0.33,
    fadeOutDuration: 0.2,
    interstitialDuration: 30,
    interstitialSkipText: 'Close interstitial',
    interstitialText: 'or wait %s seconds to continue'
  });
  return false;
};

// callback functions

var promoBoxStart = function () {
  if (typeof console !== "undefined") {
    console.log('promoBox has started...');
  }
};

var promoBoxClick = function () {
  if (typeof console !== "undefined") {
    console.log('promoBox image was clicked');
  }
};

var promoBoxClose = function () {
  if (typeof console !== "undefined") {
    console.log('promoBox terminated');
  }
};
