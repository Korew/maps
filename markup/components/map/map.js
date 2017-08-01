function initMap() {
	var coords = {lat: 50.02557245, lng: 36.21567273};
	var coords2 = {lat: 50.05184021, lng: 36.20430017};

	var markerIcon = 'static/img/general/marker-blue.png';
	var markerIcon2 = 'static/img/general/marker-red.svg';

	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 12,
		center: {lat: 50.04147815, lng: 36.21030831},
		scrollwheel:  false
	});





	var marker = new google.maps.Marker({
		position: coords,
		map: map,
		icon: markerIcon
	});

	var marker2 = new google.maps.Marker({
		position: coords2,
		map: map,
		icon: markerIcon2
	});
}