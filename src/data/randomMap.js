const maps = require("./maps.json")

function randomItem(arr){
    return arr[Math.floor(Math.random() * arr.length)];
  };

const randomMap = randomItem(maps)
randomMap["Image URL"] = "http://" + randomMap["Image URL"]

export default randomMap