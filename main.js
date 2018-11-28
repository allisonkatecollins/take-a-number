//write a function that accepts any band name as an argument
//function will increment a global variable by one each time it is invoked
//function will then return that number and the band name concatenated together

let bandNumber = 0

const takeNumber = function (bandName) {
   bandNumber = bandNumber + 1;
   console.log(bandNumber + ". " + bandName)
}

const scum = takeNumber("Galactic Scum")

const under = takeNumber("Underdogs") 

const lilB = takeNumber("Lil B")