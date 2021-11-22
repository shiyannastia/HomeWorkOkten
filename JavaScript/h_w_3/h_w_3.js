// --створити масив з:
// - з 5 числових значень
let number = [10, 11, 12, 13, 14];
// - з 5 стічкових значень
let string = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'];
// - з 5 значень стрічкового, числового та булевого типу
let divers = ['april', 22, true, false, 'nutella'];
// - та вивести його в консоль
console.log(number);
console.log(string);
console.log(divers);

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
let array = [];
array[0] = 1;
array[1] = 'two';
array[2] = true;
array[3] = 4;
array[4] = 'five';
console.log(array);
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
for (let i = 0; i < 10; i++) {
    document.write('<div>page</div>');
}
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
for (let i = 0; i < 10; i++) {
    document.write(`<div>page ${i}</div>`);
}
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
let i = 0;
while (i < 20) {
    document.write(`<h1>text</h1>`);
    i++
}
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
let n = 0;
while (n < 20) {
    document.write(`<h1>text ${n}</h1>`);
    n++
}
// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
let numarray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (i = 0; i < numarray.length; i++) {
    console.log(numarray[i])
}
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
let strarray = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
for (i = 0; i < strarray.length; i++) {
    console.log(strarray[i])
}
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
let all0array = [1, 'two', true, 'four', false, 'six', 7, 'eight', 'nine', 10];
for (i = 0; i < all0array.length; i++) {
    console.log(all0array[i])
}
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
let all1array = [1, 'two', true, 'four', false, 'six', 7, 'eight', 'nine', 10];
for (i = 0; i < all1array.length; i++) {
    if (typeof all1array[i] === 'boolean') {
        console.log(all1array[i]);
    }
}
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
let all2array = [1, 'two', true, 'four', false, 'six', 7, 'eight', 'nine', 10];
for (i = 0; i < all2array.length; i++) {
    if (typeof all2array[i] === 'number') {
        console.log(all2array[i]);
    }
}
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
let all3array = [1, 'two', true, 'four', false, 'six', 7, 'eight', 'nine', 10];
for (i = 0; i < all3array.length; i++) {
    if (typeof all3array[i] === 'string') {
        console.log(all3array[i]);
    }
}
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
let twoarray = [];
twoarray[0] = 'zero';
twoarray[1] = 'one';
twoarray[2] = true;
twoarray[3] = 3;
twoarray[4] = false;
twoarray[5] = 'five';
twoarray[6] = 6;
twoarray[7] = 7;
twoarray[8] = 8;
twoarray[9] = 'nine';

for (let i = 0; i < twoarray.length; i++) {
    console.log(twoarray[i]);
}
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let i = 0; i < 10; i++) {
    console.log('крок : ' + i);
    document.write('крок : ' + i + '  ');
}
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let i = 0; i < 100; i++) {
    console.log('крок : ' + i);
    document.write('крок : ' + i + '  ');
}
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
for (let i = 0; i < 100; i = i + 2) {
    console.log('крок : ' + i);
    document.write('крок : ' + i + '  ');
}
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
for (let i = 0; i < 100; i++) {
    if (i % 2 === 0) {
        console.log('крок : ' + i);
        document.write('крок : ' + i + '  ');
    }
}
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
for (let i = 0; i < 100; i++) {
    if (i % 2 === 1) {
        console.log('крок : ' + i);
        document.write('крок : ' + i + '  ');
    }
}