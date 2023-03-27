import{shipCreator} from "./shipCreator"
import{shipHitter} from "./shipCreator"
import{Ship} from "./ship"
import{Gameboard} from "./gameboard"

//create the overall container for the page
generateElement("div","","","content","overallContainer","overallContainer")

//header container
generateElement("div","","","overallContainer","headerContainer","headerContainer")
generateElement("div","","Battleship","headerContainer","header","header")
generateElement("div","","Instructions: First click on a ship on the right, then click to place it on the board. After all ships are placed, the game begins.","headerContainer","header","header")

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
    for (let i=1;i<=shipLength;i++){    
        
        generateElement("button",i,"",nameOfShip+"Container",nameOfShip,`${nameOfShip} unselectedShip`)
        
        
                
    }

    //change color of all buttons in the column to red border if clicked
    Array.from(document.getElementsByClassName(nameOfShip)).forEach(item => {
        item.addEventListener('click', event =>{
            
            Array.from(document.getElementsByClassName(nameOfShip)).forEach(item => {

                item.classList.remove("unselectedShip")
                item.classList.add("selectedShip");
                //once the ship is clicked, disable the buttons for that ship
                item.disabled=true;

            })

            placeOnBoard(nameOfShip)

            
            

        })
    })

   
    

}


 //need to make sure the only thing they can do at this point
 //is to click on the board and place their ship
 function placeOnBoard(nameOfShip){

    //string containing the ship name, so we can reference it in a class later
    var shipNameString = nameOfShip;

    //make the call "nameOfShip" reference the object
    nameOfShip = eval(nameOfShip);
    
    //change the sidebar ship buttons such that they cannot be clicked
    //they should also visually change to suggest they cannot be clicked
    Array.from(document.getElementsByClassName("unselectedShip")).forEach(item => {
        item.disabled=true;
    })
    
    //if a spot on the board is clicked, change the button to the ship class
    Array.from(document.getElementsByClassName("boardButton")).forEach(item => {
        item.addEventListener('click', event =>{
            
            //when clicked, it should change to the ship's class
            //this should change its color, along with colors along the same column
            //depending on the ship length            
            
            //need to loop until the Y coordinate has gone far enough
            for(let i=0;i<nameOfShip.length;i++){

                //split the XY coordinate into an array.
                var startingID = item.getAttribute('id'); 
                var splitString = startingID.split(',');
                let startingCoordinate = parseInt(splitString[1])

                //make sure the function doesn't allow you to place ship too low
                if(i==0 && (startingCoordinate + nameOfShip.length)>11){
                    alert("You must place this ship higher on the board")
                    
                } else {
                    var modifiedArray = startingCoordinate+i;
                    var testString = splitString[0]+","+modifiedArray
                    document.getElementById(testString).setAttribute("class",`${shipNameString} boardButton`);
                }
                    
            }
            


            
            
            

            
            

        })
    })


}


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




