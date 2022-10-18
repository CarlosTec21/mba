var currentUrl = new URL(window.location.href);
var params = currentUrl.searchParams;
var url = params.get('url');
var hasControls = params.has('controls');
var hasAutoplay = params.has('autoplay');
var hasMuted = params.has('muted');
var hasLoop = params.has('loop');

var uri = new URI(url);
var isAbsoluteUrl = uri.is("absolute");
var resolvedURL = isAbsoluteUrl ? 
	url :
	new URL(url, new URL('../../../../', window.location.href).href);

var videoElement = document.querySelector('video');
videoElement.src = resolvedURL;

videoElement.toggleAttribute('controls', hasControls);
videoElement.toggleAttribute('autoplay', hasAutoplay);
videoElement.toggleAttribute('muted', hasMuted);
videoElement.toggleAttribute('loop', hasLoop);