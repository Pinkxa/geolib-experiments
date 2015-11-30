geolib.getCenter(array coords)

Calculates the geographical center of all points in a collection of geo coordinates

Takes an object or array of coordinates and calculates the center of it.

Returns an object: {"latitude": centerLat, "longitude": centerLng}

Examples

var spots = {
    "Brandenburg Gate, Berlin": {latitude: 52.516272, longitude: 13.377722},
    "Dortmund U-Tower": {latitude: 51.515, longitude: 7.453619},
    "London Eye": {latitude: 51.503333, longitude: -0.119722},
    "Kremlin, Moscow": {latitude: 55.751667, longitude: 37.617778},
    "Eiffel Tower, Paris": {latitude: 48.8583, longitude: 2.2945},
    "Riksdag building, Stockholm": {latitude: 59.3275, longitude: 18.0675},
    "Royal Palace, Oslo": {latitude: 59.916911, longitude: 10.727567}
}

geolib.getCenter(spots);

geolib.getCenter([
    {latitude: 52.516272, longitude: 13.377722},
    {latitude: 51.515, longitude: 7.453619},
    {latitude: 51.503333, longitude: -0.119722}
]);
geolib.isPointInside(object latlng, array coords)

Checks whether a point is inside of a polygon or not. Note: the polygon coords must be in correct order!

Returns true or false

Example

geolib.isPointInside(
    {latitude: 51.5125, longitude: 7.485},
    [
        {latitude: 51.50, longitude: 7.40},
        {latitude: 51.555, longitude: 7.40},
        {latitude: 51.555, longitude: 7.625},
        {latitude: 51.5125, longitude: 7.625}
    ]
); // -> true
geolib.isPointInCircle(object latlng, object center, integer radius)

Similar to is point inside: checks whether a point is inside of a circle or not. Returns true or false
Example

// checks if 51.525, 7.4575 is within a radius of 5km from 51.5175, 7.4678
geolib.isPointInCircle(
    {latitude: 51.525, longitude: 7.4575},
    {latitude: 51.5175, longitude: 7.4678},
    5000
);
geolib.orderByDistance(object latlng, mixed coords)

Sorts an object or array of coords by distance from a reference coordinate Returns a sorted array [{latitude: x, longitude: y, distance: z, key: property}]
Examples

// coords array
geolib.orderByDistance({latitude: 51.515, longitude: 7.453619}, [
    {latitude: 52.516272, longitude: 13.377722},
    {latitude: 51.518, longitude: 7.45425},
    {latitude: 51.503333, longitude: -0.119722}
]);

// coords object
geolib.orderByDistance({latitude: 51.515, longitude: 7.453619}, {
    a: {latitude: 52.516272, longitude: 13.377722},
    b: {latitude: 51.518, longitude: 7.45425},
    c: {latitude: 51.503333, longitude: -0.119722}
});
geolib.findNearest(object latlng, mixed coords[[, int offset], int limit])

Finds the nearest coordinate to a reference coordinate.

Examples

var spots = {
    "Brandenburg Gate, Berlin": {latitude: 52.516272, longitude: 13.377722},
    "Dortmund U-Tower": {latitude: 51.515, longitude: 7.453619},
    "London Eye": {latitude: 51.503333, longitude: -0.119722},
    "Kremlin, Moscow": {latitude: 55.751667, longitude: 37.617778},
    "Eiffel Tower, Paris": {latitude: 48.8583, longitude: 2.2945},
    "Riksdag building, Stockholm": {latitude: 59.3275, longitude: 18.0675},
    "Royal Palace, Oslo": {latitude: 59.916911, longitude: 10.727567}
}

// in this case set offset to 1 otherwise the nearest point will always be your reference point
geolib.findNearest(spots['Dortmund U-Tower'], spots, 1)
geolib.getPathLength(mixed coords)

Calculates the length of a collection of coordinates

Returns the length of the path in meters

Example

// Calculate distance from Berlin via Dortmund to London
geolib.getPathLength([
    {latitude: 52.516272, longitude: 13.377722}, // Berlin
    {latitude: 51.515, longitude: 7.453619}, // Dortmund
    {latitude: 51.503333, longitude: -0.119722} // London
]); // -> 945235
geolib.getSpeed(coords, coords[, options])

Calculates the speed between two points within a given time span.

Returns the speed in options.unit (default is km/h).

Example

geolib.getSpeed(
    {lat: 51.567294, lng: 7.38896, time: 1360231200880},
    {lat: 52.54944, lng: 13.468509, time: 1360245600880},
    {unit: 'mph'}
); // -> 66.9408 (mph)
geolib.convertUnit(string unit, float distance[, int round])

Converts a given distance (in meters) to another unit.

Parameters

unit can be one of:

m (meter)
km (kilometers)
cm (centimeters)
mm (millimeters)
mi (miles)
sm (seamiles)
ft (foot)
in (inch)
yd (yards)
distance distance to be converted (source must be in meter)

round fractional digits

Example

geolib.convertUnit('km', 14213, 2) // -> 14,21

geolib.sexagesimal2decimal(string coord)

Converts a sexagesimal coordinate to decimal format

Example

geolib.sexagesimal2decimal("51° 29' 46\" N")

geolib.decimal2sexagesimal(float coord)

Converts a decimal coordinate to sexagesimal format

Example

geolib.decimal2sexagesimal(51.49611111); // -> 51° 29' 46.00

geolib.latitude(object latlng)

geolib.longitude(object latlng)

geolib.elevation(object latlng)

Returns the latitude/longitude/elevation for a given point and converts it to decimal.

Works with:

longitude: longitude, lng, lon, 0 (GeoJSON array)
latitude: latitude, lat, 1 (GeoJSON array)
elevation: elevation, elev, alt, altitude, 2 (GeoJSON array)
Examples

geolib.latitude({lat: 51.49611, lng: 7.38896}); // -> 51.49611 geolib.longitude({lat: 51.49611, lng: 7.38896}); // -> 7.38896

geolib.useDecimal(mixed latlng)

Checks if a coordinate is already in decimal format and, if not, converts it to

Example

geolib.useDecimal("51° 29' 46\" N"); // -> 51.59611111
geolib.useDecimal(51.59611111) // -> 51.59611111
Changelog

v2.0.0+beta1

Dropped support for IE6, IE7, IE8
Added new methods geolib.latitude(), geolib.longitude(), geolib.elevation() to get latitude, longitude or elevation of points. Will be converted to decimal format automatically
Added new method geolib.extend() to extend geolib object
Added support for GeoJSON format ([lon, lat, elev])
Added property geolib.version to query the currently used version
Moved geolib.elevation to an optional module (geolib.elevation.js)
Using Object.create(Geolib.prototype) instead of object literal {}
New folder structure: compiled geolib.js can now be found in dist/ instead of root dir
Improved Grunt build task