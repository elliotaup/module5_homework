/*   Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно.
   При выполнении задания необходимо учесть, что массив может содержать не только числа, но и, например, знаки, null и так далее. */

let even = 0;
let odd = 0;
let zero = 0;
let arr = [2, 4, 8, 5, 0, null, 'hhh', undefined, '2', 7]
for (let i = 0; i <= arr.length; i++) {
    if (typeof arr[i] === "number" && !isNaN(arr[i])) {
        if (arr[i] === 0) {
            zero++;
        } else if (arr[i] % 2 == 0) {
            even++
        } else {
            odd++;
        }
    }

}
console.log(even)
console.log(odd)
console.log(zero)