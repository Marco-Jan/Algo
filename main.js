"use strict";
//!5 = 120;
//1 * 2 * 3 * 4 * 5 = 120;
// function fak(num: number){
// let result = 1;
// for (let i = 2; i <=num; i++) {
//     result *= i;
// }
// return result
// }
// console.log(fak(5));
// function fakRec(num: number): number {
//     if (num === 1) return 1;
//     return fakRec(num - 1) * num;
// }
// console.log(fakRec(5));
//////////////////////////////////////
// const myNumbers = [1, [2, 3], [8, 15, 4], [5, 6, 7, 8, 9], 10];
// //find Numbers
// function numberInArray(arr: any[], numb: number): boolean {
//     return arr.some((element) => {
//         if (Array.isArray(element)) {
//             return numberInArray(element, numb);
//         }
//         return element === numb;
//     });
// }
// console.log(numberInArray(myNumbers, 15));
//////////////////////////////////////////
// function oddNumbersRec(numbers: number []){
//     const oddNumbers: number [] = [];
//     function helper(numbers: number[]){
//     if(numbers.length === 0) return oddNumbers;
//     if(numbers[0] % 2 !== 0) oddNumbers.push(numbers[0])
//     helper(numbers.slice(1));
//     }
//     helper(numbers);
//     return oddNumbers;
// }
// const allNumbers = [1,2,3,4,5,6,7,8,9];
// console.log(oddNumbersRec(allNumbers));
///////////////////////////////////////////////
//       Übung 1
// function sumRange(number: number): number {
//     if (number === 1) return 1;
//     return sumRange(number - 1) + number;
// }
// console.log(sumRange(6));
//////////////////////////////////////////////
//            Übung 2
// function power(base: number, exponent: number): any{
// if ( exponent === 0) return 1;
// if (base > 0) return base * power(base, exponent - 1);
// }
// console.log(power(2,6));
/////////////////////////////////////////////
//              Übung 4
/////////////////////////////////////////////
//              Übung 5
// let six = productOfArray([1, 2, 3]);
// let sixty = productOfArray([1, 2, 3, 10]);
// console.log(six, sixty);
// function productOfArray(array: number[]): number {
//     function helper (array: number[])
//     if (array.length === 0) return 1;
//     if (array.length >= 1) {
//     helper(array.slice());
//     }
// }
//////////////////////////////
// Code performance mit Big O
// function reverseString2(text: string) :string{
//     return text.split("").reverse().join("");
// }
// function reverseString3(text: string) :string{
// return [...text].reverse().join("");
// }
// function addUpto(nums: number): number {
//     let total = 0;
//     for (let i = 0; i <= nums; i++) {
//         total += i;
//     }
//     return total;
// }
// console.log("hello");
// console.log(addUpto(6));
// function addUptogauss(nums: number): number {
//     return (nums * (nums + 1)) / 2;
// }
// console.log(addUptogauss(6));
// for (let i = 0; i <= 10; i++) {
//     let time1 = performance.now();
//     addUpto(100000);
//     let time2 = performance.now();
//     console.log(`time: ${(time2 - time1) / 1000} seconds`);
// }
// const myData = [1, 2, 3, 4];
// myData[2];
///////////////////lineare komplexität
// function findItem(data: number[], item: number): boolean {
//     for (let i = 0; i < data.length; i++){
//         if(item === data[i]) return true;
//     }
//     return false;
// }
//O(n)
// function loopMin5(n: number): void{
//     for(let i = 0; i <= Math.max(5,n);i++){
//         console.log(i);
//     }
// }
// console.log(loopMin5(60));
// const myData: number[] = [1000, 5, 16, 5, 4, 100, 50, 87, 90, 100];
// function linearSearch(myData: number[], num: number): number {
//     for (let i = 0; i < myData.length; i++) {
//         if (num === myData[i]) return i
//     }
//     return -1;
// }
// console.log(linearSearch([5,2,1,3,4],1));
// const binArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
// function binarySearch(binArray: number[], num: number): number {
//     let pointerLeft: number = 0;
//     let pointerRight: number = binArray.length - 1;
//     while (pointerLeft <= pointerRight) {
//         const middlePointer = Math.floor((pointerLeft + pointerRight) / 2);
//         if (binArray[middlePointer] === num) {
//             return middlePointer;
//         }
//         if (binArray[middlePointer] < num) {
//             pointerLeft = middlePointer + 1;
//         } else {
//             pointerRight = middlePointer + 1;
//         }
//     }
//     return -1;
// }
// console.log(binarySearch(binArray, 19));
// const text: string= "bazooom buz biz boom bazoom";
// function searchSubString(text: string, searchWord: string): number {
//     let count: number = 0;
//     for (let i = 0; i <= text.length; i++) {
//         let match: boolean = true;
//         for (let j = 0; j < searchWord.length; j++) {
//             if (text[i + j] !== searchWord[j]) {
//                 match = false;
//                 break;
//             }
//         }
//         if (match === true) count++;;
//     }
//     if (count > 0) {
//         return count;
//     } else {
//         return -1;
//     }
// }
// console.log(searchSubString(text, "baz"));  
function swap(arr, index1, index2) {
    const temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}
// let arr: number[] = [5,2,7,2,87,6,4,34,4,67,8];
// swap(arr,0,1);
// function bubbleSort(arr: number []): number[] {
//     let arrlength = arr.  length;
//     for (let i = 0; i < arrlength - 1; i++) { 
//         for (let j = 0; j  < arrlength - 1; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 let indexSwitch = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = indexSwitch;
//             }
//         }
//     }
//     return arr;
// }
// let arr = [5, 2, 7, 2, 87, 6, 4, 34, 4, 67, 8, 1];
// console.log(bubbleSort(arr));
// function selectedSort(arr: number[]): number[] {
//     let minIndex: number;
//     for (let i = 0; i < arr.length - 1; i++) {
//         minIndex = i
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[j] < arr[minIndex]) {
//                 minIndex = j;
//             }
//         }
//         if (i !== minIndex) swap(arr, minIndex, i);
//     }
//     return arr;
// }
// console.log(selectedSort(arr));
// let arr = [5, 2, 7, 2, 87, 6, 4, 34, 4, 67, 8, 1];
// function insertionSort(arr: number []): number[] {
//     for (let i = 1; i < arr.length; i++) {
//         let compareNum = arr[i];
//         let j = i - 1;
//         while (j >= 0 && arr[j] > compareNum) {
//             arr[j + 1] = arr[j];
//             j = j - 1;
//         }
//         arr[j + 1] = compareNum;
//     }
//     return arr;
// }
// console.log(insertionSort(arr));
let arr1 = [2, 56, 7, 23];
let arr2 = [5, 34, 91, 3];
function merge(arr1, arr2) {
    let result = [];
    let arr1Index = 0;
    let array2Index = 0;
    while (arr1Index < arr1.length && array2Index < arr2.length) {
        if (arr1[arr1Index] < arr2[array2Index]) {
            result.push(arr1[arr1Index]);
            arr1Index++;
        }
        else {
            result.push(arr2[array2Index]);
            array2Index++;
        }
    }
    while (arr1Index < arr1.length) {
        result.push(arr1[arr1Index]);
        arr1Index++;
    }
    while (array2Index < arr2.length) {
        result.push(arr2[array2Index]);
        array2Index++;
    }
    return result;
}
console.log(merge(arr1, arr2));
//# sourceMappingURL=main.js.map