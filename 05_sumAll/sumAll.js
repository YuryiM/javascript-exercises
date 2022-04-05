const sumAll = function(int1, int2) {
    if(validInput(int1, int2)) return "ERROR";
    if (int1 > int2){
        start = int2;
        end = int1;
    }
    else {
        start = int1;
        end = int2;
    }  
    sum = 0;
    for(i = start; i <= end; i++){
        sum += i;
    }
    return sum;
};

function validInput (int1, int2){
    console.log("TEST");
    if(int1 < 0 || int2 < 0) {
        return 'ERROR';
    }
    else if (!Number.isInteger(int1) || !Number.isInteger(int2)){
        console.log("Errored");
        return 'ERROR';
    }
}

// Do not edit below this line
module.exports = sumAll;
