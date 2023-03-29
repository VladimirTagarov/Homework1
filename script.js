// let a = 10;
// alert(a);

// a = 20;
// alert(a);

let languageCreator = 'Брендан Эйх';
alert(languageCreator);

let num_1 = 10;
let num_2 = 2;
alert(num_1 + num_2);
alert(num_1 - num_2);
alert(num_1 * num_2);
alert(num_1 / num_2);

let a = 9;
let b = 2;
alert(a % b);

let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num ++;
num --;
alert(num);

let age = prompt('Сколько Вам лет?');
alert(age);

let user = {
    name: 'Vladimir',
    age: 32,
    isAdmin: false,
};
user.cityOfResidence = 'Moscow';
user.age = 33;
delete user.cityOfResidence;
let info = prompt('Какую информацию хотите узнать о пользователе?');
alert(info);

let name = prompt('Введите ваше имя');
alert('Привет, ' + name + '!');