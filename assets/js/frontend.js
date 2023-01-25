(function () {

	document.addEventListener('DOMContentLoaded', function (e) {

		var elPanzoom = document.querySelector('.panzoom-element');
		if (elPanzoom) {
			var panzoom = Panzoom(elPanzoom, {
				minScale: 1.1,
				maxScale: 5,
				startScale: 1.1,
				animate: true,
				duration: 1000,
				origin: '50% 0'
			});

			var zoomInButton = elPanzoom.parentElement.querySelector('.zoomin-button');
			var zoomOutButton = elPanzoom.parentElement.querySelector('.zoomout-button');

			zoomInButton.addEventListener('click', panzoom.zoomIn);
			zoomOutButton.addEventListener('click', panzoom.zoomOut);

			elPanzoom.parentElement.addEventListener('wheel', panzoom.zoomWithWheel);
		}
	});

})();