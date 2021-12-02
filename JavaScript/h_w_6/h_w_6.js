// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let str1 = 'hello world';
console.log(str1.length);
let str2 = 'lorem ipsum';
console.log(str2.length);
let str3 = 'javascript is cool';
console.log(str3.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
let toUpperCase1 = str1.toUpperCase();
console.log(toUpperCase1);
let toUpperCase2 = str2.toUpperCase();
console.log(toUpperCase2);
let toUpperCase3 = str3.toUpperCase();
console.log(toUpperCase3);

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let toLowerCase1 = str1.toLowerCase();
console.log(toLowerCase1);
let toLowerCase2 = str2.toLowerCase();
console.log(toLowerCase2);
let toLowerCase3 = str3.toLowerCase();
console.log(toLowerCase3);

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str = ' dirty string   ';
let trim = str.trim();
console.log(trim);

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']
let stringToArray = str => {
    let split = str.split(' ');
    console.log(split);
}
stringToArray('Каждый охотник желает знать')

// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый
let delete_characters = (str, length) => {
    let substr = str.substr(str, length);
    console.log(substr);
}
delete_characters('Каждый охотник желает знать', 7);

// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами.
// При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
let insert_dash = (str) => {
    let replaceAll = str.replaceAll(' ', '-');
    let toUpperCase = replaceAll.toUpperCase();
    console.log(toUpperCase);
}
insert_dash('HTML JavaScript PHP')

// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
let lower = (str) => {
    let charAt = str.charAt(0);
    let toUpperCase = charAt.toUpperCase();
    console.log(toUpperCase + str.slice(1));
}
lower('каждый охотник желает знать');

// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
let capitalize = (str) => {
    str = str.split(' ');
    for (let i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    str = str.join(" ");
    return str;
};
console.log(capitalize('каждый охотник желает знать'));
