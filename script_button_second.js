
function gameForButtonSecond(){
    let arr = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    arr = arr.sort(() => Math.random() - 0.5);
    alert(arr);
    let firstAnswer = prompt('Чему равнялся первый элемент массива?');
    let secondAnswer = prompt('Чему равнялся последний элемент массива?');
    if ((firstAnswer == arr[0]) && (secondAnswer == arr[6])) {
        alert('Поздравляю, вы угадали оба элемента');        
    }
    else if ((firstAnswer == arr[0]) || (secondAnswer == arr[6])) {
        alert('Вы были близки к победе!');
    }
    else {
        alert('Вы не угадали, попробуйте снова');
    }
}
