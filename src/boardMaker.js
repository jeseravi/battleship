import {generateElement} from "./generateElement"
import {opponentPlaceShips} from "./opponentPlaceShips"
import { placeOnBoard } from "./placeOnBoard";

export function boardMaker(dimensions,location,whichBoard){

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
        
        generateElement("button",i,"",location,xCoordinate+","+yCoordinate,`boardButton unselectedBoardButton ${whichBoard}`)
        
        //disable the board buttons at the start
        if(i==dimensions-1){
            Array.from(document.getElementsByClassName("boardButton unselectedBoardButton")).forEach(item => {
                item.disabled=true;
            })
        }

        
    }
}

//make sure to make a container just for the opponent's Board. should be empty/hidden at the beginning
//once all ships are placed, generate a board for the CPU.
export function opponentBoard(){
   
    if(Array.from(document.getElementsByClassName(`unselectedBoardButton`)).length==88){
        boardMaker(100,"computerBoardContainer","computerBoard")
        //change fillerDivEmpty to fillerDiv which essentially creates a small margin between the boards
        document.getElementById("fillerDivEmpty").setAttribute("id","fillerDiv")

        //call function to place ships for opponent
        placeOnBoard("tinyShip","computerBoard","random");
        placeOnBoard("mediumShip","computerBoard","random");
        placeOnBoard("largeShip","computerBoard","random");
    }
   
}