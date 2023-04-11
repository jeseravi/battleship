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
generateElement("div","","Instructions: First click on a ship on the right, then click to place it on the board. After all ships are placed, the game begins. The ships on the opponent's board are visible for demonstration purposes.","headerContainer","header","header")

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

export function gameMechanics(nameOfShip){
    
    const stringName = nameOfShip
    nameOfShip = eval(nameOfShip);

    //assign event listeners to opponent's board
    Array.from(document.getElementsByClassName(`computerBoard`)).forEach(item => {

        item.disabled = false;
  
    })

    Array.from(document.getElementsByClassName(`${stringName} computerBoard`)).forEach(item => {

        //when a ship tile is clicked, it will increase times hit using the ship class
        //this should also put viual indicator on the tile to indicate the ship has been hit
        item.addEventListener('click', event =>{
            nameOfShip.shipHitter();
            item.disabled = true;
            item.setAttribute("class",`hitTile`)
            if(Array.from(document.getElementsByClassName(`hitTile`)).length==12){
                alert("You win!")
            }

            //after the player takes a turn, allow the computer to turn a random player tile red
            //make sure that if enough player tiles are red the player loses the game
        })

    })

    //when a non-ship tile is clicked, it should turn blue
    Array.from(document.getElementsByClassName(`unselectedBoardButton`)).forEach(item => {

        item.addEventListener('click', event =>{
            item.disabled = true;
            item.setAttribute("class",`missTile`)
            
        })

    })

}