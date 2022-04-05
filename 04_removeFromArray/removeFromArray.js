const removeFromArray = function(array, item1, item2, item3, item4, item5) {
    return array.filter(item => { 
        for(i = 1; i < arguments.length; i++){
            if (item === arguments[i]){
                break;
            }
            else if (i == arguments.length-1) {
                return item;
            }
        }
    });
};

// Do not edit below this line
module.exports = removeFromArray;
