// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function s_rectangl(a, b) {
    return a * b;
}

console.log(s_rectangl(2, 4))

// - створити функцію яка обчислює та повертає площу кола з радіусом r
function s_circle(r) {
    return Math.PI * Math.pow(r, 2);
}

console.log(s_circle(4))

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function s_cylinder(h, r) {
    return 2 * Math.PI * r * (h + r);
}

console.log(s_cylinder(2, 4))

// - створити функцію яка приймає масив та виводить кожен його елемент
let array = [22, true, 'okten']

function arr(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i])
    }
}

arr(array)

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function p_text(text) {
    document.write(`<p>${text}</p>`)
}

p_text('ppp')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function ul(text) {
    document.write(`<ul>`);
    document.write(`<li>${text}</li>`);
    document.write(`<li>${text}</li>`);
    document.write(`<li>${text}</li>`);
    document.write(`</ul>`);
}

ul('lililili');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.-->
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)-->

function ul_li(text, number) {
    document.write(`<ul>`);
    for (let i = 0; i < number; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`);
}

ul_li('ululul', 4);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
function all(array) {
    document.write(`<ul>`);
    for (let i = 0; i < array.length; i++) {
        document.write(`<li>${array[i]}</li>`);
    }
    document.write(`</ul>`);
}
all(array);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let simpson = [
    {id: 1, name: 'Bart', age: 10},
    {id: 2, name: 'Lisa', age: 9},
    {id: 3, name: 'Maggie', age: 1}
]
function object(simpson){
    document.write(`<div>`)
    for (let simpsonChildren of simpson) {
                document.write(`<div>${simpsonChildren.id}.${simpsonChildren.name} - ${simpsonChildren.age}</div>`);
            }
    document.write(`</div>`)
}
object(simpson);