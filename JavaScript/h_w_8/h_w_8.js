// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!
//     - Напишіть код,  котрий :
// -- отримує текст з параграфа з id "content"
let contentElementById = document.getElementById('content');
console.log(contentElementById);
// -- отримує текст з блоку з id "rules"
let rulesElementById = document.getElementById('content');
console.log(rulesElementById);
// -- замініть текст параграфа з id 'content' на будь-який інший
content.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, dolorum.';
// -- замініть текст параграфа з id 'rules' на будь-який інший
rules.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, dolorum.';
// -- змініть кожному елементу колір фону на червоний
let childrenBackground = document.body.children;
for (const backgroundElement of childrenBackground) {
    backgroundElement.style.backgroundColor = 'red';
}
// -- змініть кожному елементу колір тексту на синій
let childrenColor = document.body.children;
for (const colorElement of childrenColor) {
    colorElement.style.color = 'blue';
}
// -- отримати весь список класів елемента з id=rules і вивести їх в console.log
let classList = document.getElementById('rules');
console.log(classList.classList);
// -- поміняти колір тексту у всіх елементів fc_rules на червоний
let classRules = document.getElementsByClassName('fc_rules');
for (const cr of classRules) {
    cr.style.color = 'red'
}