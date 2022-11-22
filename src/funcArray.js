/* Encuentra el máximo */

export function maxOfTwoNumbers(a, b){
    if(a>b){
        return a
    }else if (a<b){
        return b
    } else{
        return a
    }
}

export function findLongestWord(array){  
    if(array.length == 0){
        return undefined;
    }
    let longestWord = "";
    for (let i = 0; i < array.length; i++){
        if (longestWord.length < array[i].length) {
                longestWord = array[i];
  }
}

return longestWord;

}

export function sumArray(array){
    
    const sumatoria = array.reduce((valorPrevio, valorActual) => valorPrevio + valorActual, 0);
    return sumatoria;
}
export function averageNumbers(array){
    if(array.length == 0){
        return undefined;
    }
    let average = array.reduce((a, b)=> a + b, 0) / array.length;
    return average;
}
export function averageWordLength(array){
    if(array.length == 0){
        return undefined;
    }
    let averageWord = array.join('').length / array.length;
    return averageWord;
}
export function uniquifyArray(array){
    if(array.length == 0){
        return undefined;
    }
    let sinDuplicados = [...new Set(array)];
    return sinDuplicados;
}
export function doesWordExist(array, word){
    return array.includes(word);
}
export function howManyTimes(array, word){
    if(array.length == 0){
        return undefined;
    }
    let cantidadDeVeces = 0;
    for(let i = 0; i<array.length; i++){
        if(array[i] == word){
            cantidadDeVeces++;
        }
    }
    return cantidadDeVeces;
}
export function greatestProduct(){}
