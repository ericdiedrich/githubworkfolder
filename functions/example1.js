let coffeeIsGrinding=false;

const pressGrindBeans=()=>{
    if (coffeeIsGrinding){
    console.log("Stopping the grind");
    coffeeisGrinding = false;
    } else {
    console.log("Grinding is about to begin")
    }
}

pressGrindBeans();

