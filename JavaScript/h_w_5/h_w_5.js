// Всі функції повинні бути описані стрілочним типом!!!!
// - створити функцію яка обчислює та повертає площу прямокутника висотою
let s_rectangl = (a, b) => a * b;
console.log(s_rectangl(2, 4));

// - створити функцію яка обчислює та повертає площу кола
let s_circle = (r) => Math.PI * Math.pow(r, 2);
console.log(s_circle(4));

// - створити функцію яка обчислює та повертає площу циліндру
let s_cylinder = (h, r) => 2 * Math.PI * r * (h + r);
console.log(s_cylinder(2, 4));

// - створити функцію яка приймає масив та виводить кожен його елемент
let array = [22, true, 'okten'];
let arr = array => {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i])
    }
};
arr(array);

// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент
let p_text = text => {
    document.write(`<p>${text}</p>`)
};
p_text('ppp');

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
let ul = text => {
    document.write(`<ul>
    <li>${text}</li>
    <li>${text}</li>
    <li>${text}</li>
    </ul>`)
};
ul('lililili');

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
let ul_li = (text, number) => {
    document.write(`<ul>`);
    for (let i = 0; i < number; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`);
};
ul_li('ululul', 4);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let all = array => {
    document.write(`<ul>`);
    for (let i = 0; i < array.length; i++) {
        document.write(`<li>${array[i]}</li>`);
    }
    document.write(`</ul>`);
};
all(array);
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let simpson = [
    {id: 1, name: 'Bart', age: 10},
    {id: 2, name: 'Lisa', age: 9},
    {id: 3, name: 'Maggie', age: 1}
]
let object = simpson => {
    document.write(`<div>`)
    for (let simpsonChildren of simpson) {
        document.write(`<div>${simpsonChildren.id} - ${simpsonChildren.name} - ${simpsonChildren.age}</div>`);
    }
    document.write(`</div>`)
}
object(simpson);