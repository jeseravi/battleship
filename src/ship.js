//ships will be objects that include their length
//number of times they've been hit, and whether they're sunk or not

//only methods or properties that are used outside of ship object need unit tests

//ships should havea a hit() function that calculates it based on their length and number of hits

//factory function 
const Ship = (length, timesHit, sunk) => {

    return{
        length: length,
        timesHit: timesHit,
        sunk: sunk
    }

    function hit(){
        timesHit++;
    }

    function isSunk(){
        if(timesHit==length){
            sunk==true;
        }
    }

}