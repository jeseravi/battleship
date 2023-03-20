import{shipCreator} from "./shipCreator"
import{shipHitter} from "./shipCreator"
import{Ship} from "./ship"
import{Gameboard} from "./gameboard"


//makes a ship
const tinyShip = new Ship(2,0,false);

//intent is to increase hit count by one

tinyShip.shipHitter();
tinyShip.shipHitter();
console.log(tinyShip.timesHit)


//places the ship on a specific area of the board

function shipPlacer(xCoordinate,yCoordinate){

}

//create the game board. The ID of each square should correspond to its coordinates