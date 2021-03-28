/* AIzaSyB0lYKW4d25OMfT6BNBE6Y-NF8WPwMfPQs */
window.addEventListener(
	"scroll",
	() => {
		document.body.style.setProperty(
			"--scroll",
			window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
		);
	},
	false
);
//================================================================
//					GOOGLE API
//================================================================
function initMap() {
	//Create Location
	const location = { lat: 40.74969014236962, lng: -73.98567608474801 };
	//Create Map
	const map = new google.maps.Map({
		center: location,
		zoom: 16,
		gestureHandling: "cooperative",
		zoomControl: false,
	});
	//Create Panorama
	const panorama = new google.maps.StreetViewPanorama(
		document.getElementById("panorama"),
		{
			position: location,
			pov: {
				heading: 100000000,
				pitch: 0,
			},
		}
	);

	//Create icons
	const iconBase =
		"https://developers.google.com/maps/documentation/javascript/examples/full/images/";
	const icons = {
		info: {
			icon: iconBase + "info-i_maps.png",
		},
	};
	const features = [
		{
			position: new google.maps.LatLng(-33.91721, 151.2263),
			type: "info",
		},
	];

	// Create markers.
	/* for (let i = 0; i < features.length; i++) {
		new google.maps.Marker({
			position: features[i].position,
			icon: icons[features[i].type].icon,
			map: map,
		});
	} */
	map.StreetViewPanorama(panorama);
}

//================================================================
//					SLIDES JAVASCRIPT
//================================================================

var slideIndex = 1;
var slides = document.getElementsByClassName("slide");

const manageSlides = (n) => {
	showSlides((slideIndex += n));
};
const manageSlides2 = () => {
	showSlides((slideIndex += 1));
};
const showSlides = (n) => {
	for (let i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}

	if (n > slides.length) slideIndex = 1;
	if (n < 1) slideIndex = slides.length;
	slides[slideIndex - 1].style.display = "block";

	console.log("slideIndex - 1: " + (slideIndex - 1));
	console.log("slideIndex: " + slideIndex);
	console.log("slideIndex + 1: " + (slideIndex + 1));
	console.log("================");

	if (slideIndex + 1 > slides.length) {
		console.log("error");
		slides[1].style.display = "block";
	} else if (slideIndex < 1) {
		console.log("error2");
		slides[slides.length - 1].style.display = "block";
	} else {
		slides[slideIndex].style.display = "block";
	}

	if (slideIndex + 2 > slides.length) {
		console.log("error");
		slides[0].style.display = "block";
	} else if (slideIndex < 1) {
		console.log("error2");
		slides[slides.length - 1].style.display = "block";
	} else {
		slides[slideIndex + 1].style.display = "block";
	}

	// 1,2   2,3   3,4(0)

	setTimeout(manageSlides2, 5000);
};

showSlides(slideIndex);
//================================================================
//					ANIMATION
//================================================================
