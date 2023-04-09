import {generateElement} from "./generateElement"
import {placeOnBoard} from "./placeOnBoard"

export function shipDivMaker(shipLength,nameOfShip,nameOfBoard){

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

            placeOnBoard(nameOfShip,nameOfBoard)

            
            

        })
    })

   
    

}