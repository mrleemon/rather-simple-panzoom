(function () {

	document.addEventListener('DOMContentLoaded', function (e) {

		const elem = document.getElementById('panzoom-element')
		const panzoom = Panzoom(elem, {
			minScale: 1.1,
			maxScale: 5,
			startScale: 1.1,
			animate: true,
			duration: 1000,
			origin: '50% 0'
		})
		
		const zoomInButton = document.getElementById('zoomin-button');
		const zoomOutButton = document.getElementById('zoomout-button');
		
		zoomInButton.addEventListener('click', panzoom.zoomIn)
		zoomOutButton.addEventListener('click', panzoom.zoomOut)
		
		elem.parentElement.addEventListener('wheel', panzoom.zoomWithWheel)
		
	});

})();