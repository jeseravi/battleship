import{shipCreator} from "./shipCreator"
import{shipHitter} from "./shipCreator"
import{Ship} from "./ship"
import{Gameboard} from "./gameboard"

//create the overall container for the page
generateElement("div","","","content","overallContainer","overallContainer")

//header container
generateElement("div","","","overallContainer","headerContainer","headerContainer")
generateElement("div","","Battleship","headerContainer","header","header")

//container that contains the board and sidebar
generateElement("div","","","overallContainer","gameContainer","gameContainer")

//create the board container
generateElement("div","","","gameContainer","boardContainer","boardContainer")

//create the sidebar where the ships will be selectable
generateElement("div","","","gameContainer","sidebarContainer","sidebarContainer")

//create divs within sidebar to contain the selectable ships
generateElement("div","","","sidebarContainer","tinyShipContainer","tinyShipContainer")
generateElement("div","","","sidebarContainer","mediumShipContainer","mediumShipContainer")
generateElement("div","","","sidebarContainer","largeShipContainer","largeShipContainer")

//make the ships
//populate the sidebar with divs representing the ships
const tinyShip = new Ship(2,0,false);
shipDivMaker(tinyShip.length,"tinyShip");
const mediumShip = new Ship(4,0,false);
shipDivMaker(mediumShip.length,"mediumShip");
const largeShip = new Ship(6,0,false);
shipDivMaker(largeShip.length, "largeShip");

function shipDivMaker(shipLength,nameOfShip){

    //create dimension number of buttons
    for (let i=0;i<shipLength;i++){        
        generateElement("button",i,"",nameOfShip+"Container","sidebarButton",nameOfShip)

    }
}


//intent is to increase hit count by one

tinyShip.shipHitter();
console.log(tinyShip.timesHit)


//places the ship on a specific area of the board

function shipPlacer(xCoordinate,yCoordinate){

}

//create the game board. The ID of each square should correspond to its coordinates

function boardMaker(dimensions){

    //create dimension number of buttons
    for (let i=0;i<dimensions;i++){
        //want the ID to correspond to x/y coordinates
        //the axis will be kind of weird. The top left is 1,1. The far right is 10,1.
        //The bottom right is 10,10. Bottom left is 1,10.
        let yCoordinate = Math.ceil((i+1)/10);
        let xCoordinate;
        if(i<10){
            xCoordinate = i+1;
        } if(i>=10){
            xCoordinate = i+1-10*(yCoordinate-1)
        } 
        
        generateElement("button",i,"","boardContainer",xCoordinate+","+yCoordinate,"boardButton")

        
        

        
        
    }
}
boardMaker(100);



//need to create a way to put ships on the board. Maybe click on them on the side then click
//on a coordinate to place

//also need a way to indicate how large the ship is? Maybe a hover effect that lights up the buttons?













//function to more easily generate elements

function generateElement(whatIsIt,entryName,innerHTML,whereToPut,id,chosenClass){

    let generateWhat = whatIsIt;
    let generateEntry = entryName;
    let generateWhere = whereToPut;
    let generateHTML = innerHTML;
    let generateId=id;
    let generateClass=chosenClass;

    generateEntry = document.createElement(generateWhat);
    generateEntry.setAttribute("id",generateId);
    generateEntry.setAttribute("class",generateClass);
    generateEntry.innerHTML=generateHTML;
    document.getElementById(generateWhere).appendChild(generateEntry);
}
