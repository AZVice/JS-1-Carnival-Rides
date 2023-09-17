//DO NOT RENAME THESE VARIABLES, THEY ARE USED TO RENDER THINGS
let ride1PowerOn = false
let ride2PowerOn = false
let ride3PowerOn = false
let ride4PowerOn = false
let greenWireConnected = true
let yellowWireConnected = true
let redWireConnected = true
let waterIsOn = true
//Everything below is fair game for you to power on the rides

//Ride 1 works when:
    // green wire is connected
ride1PowerOn = false
if (ride1PowerOn = greenWireConnected){

}

//Ride 2 works when 
    //green and yellow wires are connected
ride2PowerOn = false
if(ride2PowerOn = (greenWireConnected && yellowWireConnected)){

}

//Ride 3 works when:
    // green and red wires are connected
    // water is on 
    // yellow wire is not connected
ride3PowerOn = false
if(ride3PowerOn = (greenWireConnected && redWireConnected) && waterIsOn && yellowWireConnected){

}

//Ride 4 has power when:
    //red wire is connected
ride4PowerOn = false
if (ride4PowerOn = redWireConnected){
}
//Ride 4 is a slot machine
    //if a 1 is rolled it should return "star"
    //if a 2 is rolled it should return "car"
    //if a 3 is rolled it should return "pot of gold"
    //if a 4 is rolled it should return "clover"
    //if a 5 is rolled it should return "bowling ball"
    //if a 6 is rolled it should return "tiger"
    //if a 7 is rolled it should return "seven"
function ride4SlotMachine(rolledNumber){
    return "nothing  "
}

let rolledNumber = 1;

if (rolledNumber === "1"){
    console.log("star");
}else if( rolledNumber === 2){
    console.log("car");
}else if( rolledNumber === 3){
    console.log("pot of gold");
}else if( rolledNumber === 4){
    console.log("clover");
}else if( rolledNumber === 5){
    console.log("bowling ball");
}else if( rolledNumber === 6){
    console.log("tiger");
}else if( rolledNumber === 7){
    console.log("seven");
}else{
    console.log("");
}