
var geoLibMsg = document.getElementById('geolib');
if (geolib){
    geoLibMsg.innerHTML = "geolib is ready!";
}
else{
    geoLibMsg.innerHTML = "geolib is NOT ready!";
}

// utility functions
var print = function(msg){
    var results = document.getElementById('results');
    results.innerHTML = msg;
};

var print = function(msg, id){
    var results = document.getElementById(id);
    results.innerHTML = msg;
};

var clickButton = function(id, func){
    document.getElementById(id).addEventListener('click', func)
}

//utility functions end

// write your geolib code here
var locations = {
       "15 AG Visser Street":{latitude: -33.8944396,longitude: 18.589829899999998},
        "UCT Gsb":{latitude: -33.9095955,longitude: 18.4181334},
        "codeX":{latitude: -33.9069389,longitude: 18.4189952},
       "Cape Town Comedy Club":{latitude: -33.9071812433221,longitude: 18.418371068948744},
        "Steers V&A":{latitude: -33.9053469,longitude: 18.4198553}
    }
    
    
geolib.getCenter(locations);

var findCenter = geolib.getCenter([
    {latitude: -33.8944396, longitude: 18.589829899999998},
    {latitude: -33.9095955, longitude: 18.4181334},
    {latitude: -33.9069389, longitude: 18.4189952},
    {latitude: -33.9071812433221, longitude: 18.418371068948744},
    {latitude: -33.9053469, longitude: 18.4198553}
]);

print(findCenter.latitude + " - " + findCenter.longitude);

var insideGeofence = geolib.isInsideGeolib(
		{latitude: -33.9051871,longitude: 18.4200329},
		[			
			{latitude: -34.0011087,longitude: 18.5585684},
			{latitude: -33.960746,longitude: 18.502602},
			{latitude: -34.0505559,longitude: 18.6725241},
			{latitude: -33.9441175,longitude: 18.5222143},
			{latitude: -33.9069058,longitude: 18.4183923}
		]
	);

print(insideGeofence.latitude + " - " + insideGeofence.longitude, "results2");

// print("<strong>let's get going!</strong>");
// clickButton("clickMe", function(){
//     print("You clicked me!");
// });

//geolib.getDistance()
