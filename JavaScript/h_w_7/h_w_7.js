// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

// створити пустий масив, наповнити його 10 об'єктами new User(....)
let users = [
    new User(0, 'name0', 'surname0', 'email0@email.com', '+380000000000'),
    new User(1, 'name1', 'surname1', 'email1@email.com', '+380111111111'),
    new User(2, 'name2', 'surname2', 'email2@email.com', '+380222222222'),
    new User(3, 'name3', 'surname3', 'email3@email.com', '+380333333333'),
    new User(4, 'name4', 'surname4', 'email4@email.com', '+380444444444'),
    new User(5, 'name5', 'surname5', 'email5@email.com', '+380555555555'),
    new User(6, 'name6', 'surname6', 'email6@email.com', '+380666666666'),
    new User(7, 'name7', 'surname7', 'email7@email.com', '+380777777777'),
    new User(8, 'name8', 'surname8', 'email8@email.com', '+380888888888'),
    new User(9, 'name9', 'surname9', 'email9@email.com', '+380999999999')
]

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
let filterUser = users.filter(a => a.id % 2 === 0);
console.log(filterUser);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
let sortUser = users.sort((a, b) => a.id - b.id);
console.log(sortUser);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
class Client {
    constructor(id, name, email, phone, order) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

// створити пустий масив, наповнити його 10 об'єктами Client
let clients = [
    new Client(0, 'name0', 'email0@email.com', '+380000000000', ['order0', 'order0', 'order0']),
    new Client(1, 'name1', 'email1@email.com', '+380111111111', ['order1', 'order1']),
    new Client(2, 'name2', 'email2@email.com', '+380222222222', ['order2', 'order2', 'order2', 'order2']),
    new Client(3, 'name3', 'email3@email.com', '+380333333333', ['order3']),
    new Client(4, 'name4', 'email4@email.com', '+380444444444', ['order4', 'order4']),
    new Client(5, 'name5', 'email5@email.com', '+380555555555', ['order5', 'order5', 'order5']),
    new Client(6, 'name6', 'email6@email.com', '+380666666666', ['order6']),
    new Client(7, 'name7', 'email7@email.com', '+380777777777', ['order7', 'order7', 'order7', 'order7']),
    new Client(8, 'name8', 'email8@email.com', '+380888888888', ['order8', 'order8', 'order8']),
    new Client(9, 'name9', 'email9@email.com', '+380999999999', ['order9'])
];

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
let sortClient = clients.sort((a, b) => a.order.length - b.order.length);
console.log(sortClient);