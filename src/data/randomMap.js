const maps = require("./maps.json")

function randomItem(arr){
    return arr[Math.floor(Math.random() * arr.length)];
  };

export const getRandomMap = () => {
  let map = randomItem(maps)
  map["Image URL"] = "http://" + map["Image URL"]
  map["Google Maps URL"] = "http://" + map["Google Maps URL"]
  return map
}

let randomMap = getRandomMap()

export default randomMap
