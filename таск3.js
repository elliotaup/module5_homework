/*Дана строка. Необходимо вывести в консоль перевёрнутый вариант. Например, "Hello" -> "olleH".*/

function stringReverse(str) {
    console.log(str.split('').reverse().join(''))
}
stringReverse('Hello');