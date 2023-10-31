calculateWeight()
const calculateWeight = (earthWeight, planet) => {
  if (planet === "mercury" || planet === "Mercury") {
    let mercuryWeight = earthWeight * 0.378;
    console.log(mercuryWeight);
    return mercuryWeight;
  } else if (planet === "mars" || planet === "Mars") {
    let marsWeight = earthWeight * 0.377;
    console.log(marsWeight);
    return marsWeight;
  } else if (planet === "jupiter" || planet === "Jupiter") {
    let jupiterWeight = earthWeight * 2.36;
    console.log(jupiterWeight);
    return jupiterWeight;
  } else if (planet === "saturn" || planet === "Saturn") {
    let saturnWeight = earthWeight * 0.916;
    console.log(saturnWeight);
    return saturnWeight;
  } else if (planet === "venus" || planet === "Venus") {
    let venusWeight = earthWeight * 0.907;
    console.log(venusWeight);
    return venusWeight;
  } else {
    console.log(
      "Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn."
    );
    return "Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.";
  }
};
calculateWeight( 10, 'mars');
/*const calculateWeight = (earthWeight, planet) => {
    switch (planet) {
        case 'Mercury':
            return earthWeight * .378;
        case 'Venus':
            return earthWeight * .907;
        case 'Mars':
            return earthWeight * .377;
        case 'Jupiter':
            return earthWeight * 2.36;
        case 'Saturn':
            return earthWeight * .916;
        default:
            return 'Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.'
    }
}
/*
// As a function declaration: 
function calculateWeight(earthWeight, planet) {
    switch (planet) {
        case 'Mercury':
            return earthWeight * .378;
        case 'Venus':
            return earthWeight * .907;
        case 'Mars':
            return earthWeight * .377;
        case 'Jupiter':
            return earthWeight * 2.36;
        case 'Saturn':
            return earthWeight * .916;
	 default:
		return 'Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.'
    }
}
*/
console.log(calculateWeight(100, 'Jupiter'))*/
