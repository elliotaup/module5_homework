/*Дан произвольный массив. Необходимо вывести количество элементов массива, затем перебрать его и вывести в консоль каждый элемент массива. */


let arr = [1, 23, 4, 7, 6, 25]
console.log(arr.length)
for (let i in arr) {
    console.log(arr[i])
}