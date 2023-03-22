//ships will be objects that include their length
//number of times they've been hit, and whether they're sunk or not

//only methods or properties that are used outside of ship object need unit tests

//ships should havea a hit() function that calculates it based on their length and number of hits

//factory function 
export class Ship{

    constructor(length,timesHit,sunkChecker){
        this.length = length;
        this.timesHit = timesHit;
        this.sunkChecker = sunkChecker;
    }

    shipHitter(){
        this.timesHit++;
        if(this.timesHit==this.length){
            this.sunkChecker==false;
        }
    }

    

    

    

}

