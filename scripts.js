/*
 * The function should recive an integer between 1 and 12 (inclusive) and return the corresponding string value. If the informed integger is not between 1 and 12, the function should return 'Unknown Month'
 * Ex: input: 1 - output: "January"
 * Ex: input: 13 - output: "Unknown Month"
 */
function correspondingMonth(month){

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    if(month >= 1 && month <= 12){
        return months[month - 1];
    } else {
        return "Unknown Month";
    }

}

console.log(correspondingMonth(1));
console.log(correspondingMonth(13));

/*
 * The function should recive an array with at least 3 itens and return the arithmetic average of all the itens.
 * If the recived array contains less then 3 itens, the function should return the boolean false.
 * Ex: input: [4,6,8] 	- output 6
 * Ex: input: [1,2] 	- output false
 */
function arithmeticAverage(firstInput, secInput, thInput){

    if(firstInput != null && secInput != null && thInput != null){
        return (firstInput + secInput + thInput) / 3;
    } else {
        return "False";
    }

}

console.log(arithmeticAverage(4, 6, 8));
console.log(arithmeticAverage(1, 2));

/*
 * The function should expect an array containing integers greater than zero and return the amount of even values contained in it.
 * Ex: input: [1,2,3,4,5] - output: 2
 */
function oddOrEven(numberArray){

    let numbers = 0;

    for (let nb of numberArray){
        if(nb % 2 === 0){
            numbers++;
        }
    }
    return numbers;
}

console.log(oddOrEven([1, 2, 3, 4, 5]));

/*
 * The function should expect a string and return it backwards.
 * Ex: input: "foo" - output: "oof"
 */
function reverseString(backWord){

    let word = ""

    for(let i = backWord.length - 1; i >= 0; i--){
        word += backWord[i];        
    }

    return word;
}

console.log(reverseString("foo"));

/*
 * The function must replace all the vowels with '?' and return the result string
 * Ex: input: 'Foo' - output: 'F??'
 */
function replaceWowels(completeWord){

    let replacedWord = "";
    const vowels = ["A", "E", "I", "O", "U", "a", "e", "i", "o", "u"];

    for(let i = 0; i < completeWord.length; i++){
        if(vowels.includes(completeWord[i])){
            replacedWord += "?";
        } else {
            replacedWord += completeWord[i];
        }
    }

    return replacedWord;
}

console.log(replaceWowels("Foo"));

/*
 * The function must expect an array of integers and sort it in ascending order
 * Ex: Input: [5,1,0,7,3,3] - Output: [0,1,3,3,5,7]
 */
function arraySort(){
    
}

/*
 * The function must expect an array of integers and return the first non-repeated value.
 * Ex: input: [2,2,3,1,1,6] - output: 3
 */
function firstNonRepeatedValue(){

}


/*
 * Your function need to read the file data.dat and return how many lines 
 * there are where the number 
 * of 0's is a multiple of 3 or the numbers of 1s is a multiple of 2.
 *
 */
function fileHandler(){

}

/*
 * The function must return the full credit card number. The card number is a multiple of 123457 and the Luhn check digit is valid.
 * The Card Number must have the following pattern: 543210******1234
 */
function creditCardNumber(){

}


/*
 * The function should work like an ATM machine. it will recive an integer value 
 * representing the amount that will be withdrown and an array containing the 
 * avaliable bank notes.
 * Your function will have to return an array informing the minimum amount 
 * of bank notes as possible for the withdrown. Consider that the amount of 
 * each note are infinity.
 */
function atmMachine(){

}


/*
 * In the context of object orientation, write the diferences between 
 * classes, objects, instances and interfaces:
*/

/*
    Classes são como os "pais" dos objetos, eles definem características deles.
    Objetos são "coisas" criadas a partir de uma classe, eles contém dados.
    Instância...
    Interfaces são utilizadas para mostrar como um comportamento de ser, 
    mas sem serem implementadas.
*/
