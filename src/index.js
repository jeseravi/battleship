import{shipCreator} from "./shipCreator"
import{shipHitter} from "./shipCreator"
import{Ship} from "./ship"
import{shipDivMaker} from "./shipmaker"
import{placeOnBoard} from "./placeOnBoard"
import {generateElement} from "./generateElement"
import {boardMaker} from "./boardMaker"

//create the overall container for the page
generateElement("div","","","content","overallContainer","overallContainer")

//header container
generateElement("div","","","overallContainer","headerContainer","headerContainer")
generateElement("div","","Battleship","headerContainer","header","header")
generateElement("div","","Instructions: First click on a ship on the right, then click to place it on the board. After all ships are placed, the game begins.","headerContainer","header","header")

//container that contains the board and sidebar
generateElement("div","","","overallContainer","gameContainer","gameContainer")

//create the container for both player and CPU boards
generateElement("div","","","gameContainer","twoBoardContainers","twoBoardContainers")

//create the CPU board container
generateElement("div","","","twoBoardContainers","computerBoardContainer","computerBoardContainer")

//create the filler filler div between boards
generateElement("div","","","twoBoardContainers","fillerDivEmpty","fillerDivEmpty")

//create the player board container
generateElement("div","","","twoBoardContainers","boardContainer","boardContainer")

//create the sidebar where the ships will be selectable
generateElement("div","","","gameContainer","sidebarContainer","sidebarContainer")

//create divs within sidebar to contain the selectable ships
generateElement("div","","","sidebarContainer","tinyShipContainer","tinyShipContainer")
generateElement("div","","","sidebarContainer","mediumShipContainer","mediumShipContainer")
generateElement("div","","","sidebarContainer","largeShipContainer","largeShipContainer")

//make the ships
//populate the sidebar with divs representing the ships
const tinyShip = new Ship(2,0,false);
shipDivMaker(tinyShip.length,"tinyShip","playerBoard");
const mediumShip = new Ship(4,0,false);
shipDivMaker(mediumShip.length,"mediumShip","playerBoard");
const largeShip = new Ship(6,0,false);
shipDivMaker(largeShip.length, "largeShip","playerBoard");


//create the game board. The ID of each square should correspond to its coordinates
boardMaker(100,"boardContainer","playerBoard");




//the CPU should have ships randomly placed. 
//the ships should be indicated just for demonstration purposes

