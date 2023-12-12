var watch =+prompt('Введите время')


switch (watch) {
    case 1:
        alert('Час ночи')
        break;
    case 2:
        alert('Два часа ночи')
        break;
    case 3:
        alert('Три часа  ночи')
        break;
    case 4:
        alert('Четыре часа ночи')
        break;
    case 5:
        alert('Пять часов утра')
        break;
    case 6:
        alert('Шесть часов утра')
        break;
    case 7:
        alert('Семь часов утра')
        break;
    case 8:
        alert('Восемь часов утра')
        break;
    case 9:
        alert('Девять часов утра')
        break;
    case 10:
        alert('Десять часов утра')
        break;
    case 11:
        alert('Оддинадцать часов утра')
        break;
    case 12:
        alert('Полдень')
        break;
    case 13:
        alert('Час дня')
        break;
    case 14:
        alert('Два часа дня')
        break;
    case 15:
        alert('Три часа  дня')
        break;
    case 16:
        alert('Четыре часа дня')
        break;
    case 17:
        alert('Пять часов дня')
        break;
    case 18:
        alert('Шесть часов вечера')
        break;
    case 19:
        alert('Семь часов вечера')
        break;
    case 20:
        alert('Восемь часов вечера')
        break;
    case 21:
        alert('Девять часов вечера')
        break;
    case 22:
        alert('Десять часов вечера')
        break;
    case 23:
        alert('Оддинадцать часов вечера')
        break;
    case 24:
        alert('Полночь')
        break;

    default:
    alert('Ошибка')
        break;
}


var year =+prompt('Введите свой возраст')

switch (year) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
    case 12:
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
        alert('Вы слишком молоды,сейчас вам нужно учиться')
        break;
        case 18:
        case 19:
        case 20:
        case 21:
        case 22:
        case 23:
        case 24:
        case 25:
        alert('Тебе пора найти работу, и перестать быть дармоедом')
        break;
        case 26:
        case 27:
        case 28:
        case 29:
        case 30:
        case 31:
        case 32:
        case 33:
        case 34:
        case 35:
        alert('Тебе пора остепенится')
        break;
        case 36:
        case 37:
        case 38:
        case 39:
        case 40:
        case 41:
        case 42:
        case 43:
        case 44:
        case 45:
        case 46:
        case 47:
        case 48:
        case 49:
        case 50:
        alert('Теперь ты можешь постепенно подготавливаться к пенсии')
        break;
        case 50:
        case 51:
        case 52:
        case 53:
        case 54:
        case 55:
        case 56:
        case 57:
        case 58:
        case 59:
        alert('Лучше добровольно уйди на пенсию')
        break;
        case 60:
        case 61:
        case 62:
        case 63:
        case 64:
        case 65:
        case 66:
        case 67:
        case 68:
        case 69:
        case 70:
        case 71:
        case 72:
        case 73:
        case 74:
        case 75:
        case 76:
        case 77:
        case 78:
        case 79:
        case 80:
        case 81:
        case 82:
        case 83:
        case 84:
        case 85:
        case 86:
        case 87:
        case 88:
        case 89:
        case 90:
        case 91:
        case 92:
        case 93:
        case 94:
        case 95:
        case 96:
        case 97:
        case 98:
        case 99:
        case 100:
        alert('Вы пенсионер')
        break;
        
    default:
    alert('Что-то пошло не так')
        break;
}
var one  =prompt( 'Введите первое число')
var  two =prompt( 'Введите второе число')
var three =prompt( 'Введите третье число')

one = Number(one)
two = Number(two)
three = Number(three)

if( (one + two + three) /3){
    alert('Среднее число ' + (( one + two + three) /3))
}else{
    if(isNaN(one) && isNaN(two) && isNaN(three)){
        alert('Все не числа')
    }else if(one){
        alert('Первое не число')
    }else if(two){
        alert('Второе не число')
    }else if (three){
        alert('Третье не число')
    }else{
        alert('Ошибка')
    }
}