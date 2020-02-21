const results = [
  {
    name: "Melbourne Cricket Grounds",
    location: { lat: -37.819967, long: 144.983449 }
  },
  { name: "Flagstaff Gardens", location: { lat: -37.81068, long: 144.954352 } },
  {
    name: "Emporium Melbourne",
    location: { lat: -37.812433, long: 144.963787 }
  },
  { name: "City Library", location: { lat: -37.817039, long: 144.965983 } },
  {
    name: "Southern Cross Station",
    location: { lat: -37.818281, long: 144.952776 }
  },
  {
    name: "Sea Life Melbourne Aquarium",
    location: { lat: -37.82064, long: 144.958325 }
  }
];
// lat, log;

// function GetMap(location_lat, location_log) {
//   // map id from div
//   var map = new Microsoft.Maps.Map("#map", {
//     center: new Microsoft.Maps.Location(location_lat, location_log),
//     zoom: 17
//   });

//   function addPin(pin_lat, pin_log) {
//     //Create custom Pushpin
//     var pin = new Microsoft.Maps.Pushpin(
//       { latitude: pin_lat, longitude: pin_log },
//       {
//         title: document.querySelector("#city").textContent,
//         subTitle: "Dream dist",
//         text: "1"
//       }
//     );
//     //Add the pushpin to the map
//     map.entities.push(pin);
//   }
//   // run
//   addPin(location_lat, location_log);
// }

// GetMap(lat, log);

// console.log(GetMap(-37.818555, 144.959076));

// callback=GetMap from script in html
function GetMap() {
  console.log("khkh");
  // map id from div
  var map = new Microsoft.Maps.Map("#map", {
    center: new Microsoft.Maps.Location(-37.818555, 144.959076),
    zoom: 17
  });

  function addPin(result) {
    //Create custom Pushpin
    var pin = new Microsoft.Maps.Pushpin(
      { latitude: result.location.lat, longitude: result.location.long },
      {
        title: result.name,
        subTitle: "SEI",
        text: "1"
      }
    );
    //Add the pushpin to the map
    map.entities.push(pin);
  }
  // run
  results.forEach(addPin);
}

// var center = function(arr) {
//   var minX, maxX, minY, maxY;
//   for (var i = 0; i < arr.length; i++) {
//     minX =
//       arr[i].location.lat < minX || minX == null ? arr[i].location.lat : minX;
//     maxX =
//       arr[i].location.lat > maxX || maxX == null ? arr[i].location.lat : maxX;
//     minY =
//       arr[i].location.long < minY || minY == null ? arr[i].location.long : minY;
//     maxY =
//       arr[i].location.long > maxY || maxY == null ? arr[i].location.long : maxY;
//   }
//   return [(minX + maxX) / 2, (minY + maxY) / 2];
// };
