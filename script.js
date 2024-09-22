    let person = {
    personName:"Anna",  // Задание 1.Типы Данных.Создайте переменные и определите типы данных с помощью typeof
    age:29,
    liveCityMoscow:true,
    pet:null,
    familia:"Evtishina "
    }
    console.log(typeof(person.personName));
    console.log(typeof(person.age));
    console.log(typeof(person.liveCityMoscow));
    console.log(typeof(person.pet));
/*Используя переменные с именем и фамилией, создайте строку, которая будет
содержать полное имя, разделенное пробелом.*/
 console.log(person.familia + person.personName);
 /*Создайте переменную, содержащую строку с числом, и преобразуйте её в
число. Определите, является ли это число целым.*/
let stringNumber = "123";
let num = Number(stringNumber);
console.log(typeof(num));
console.log(Number.isInteger(num));
/* Создайте строковую переменную с текстом "JavaScript is fun!". Используя
методы строк, получите подстроку "fun" и сделайте её все буквы
заглавными.
*/
let input = "JavaScript is fun!"
console.log(input.length);
let fun = input.slice(14,18);
console.log(fun);
let upperFun = fun.toUpperCase();
alert(upperFun);
/* Создайте переменные с названием товара и его ценой. Используйте
шаблонную строку для вывода строки в формате: "Цена на [товар]
составляет [цена] рублей."
*/
let object = "Сахар";
let prize = 49;
console.log(`Цена на ${object} составляет ${prize} рублей.`)
/*Создайте переменную, содержащую вещественное число. Используйте метод
для округления этого числа до ближайшего целого и сохраните результат в
другой переменной.*/
let num1 = 5.878;
let num2 = Math.floor(num1);
console.log(num2);
let num3 = Math.ceil(num1);
console.log(num3);
/*Создайте две переменные с числовыми значениями. Определите, какое из
чисел больше, и сохраните результат в переменной, содержащей булево
значение.
 */
let nomer1 = 2;
let nomer2 = 4;
let sravnenie = nomer1 < nomer2;
console.log(sravnenie);
//Напишите литерал объекта, который будет содержать ваше имя, возраст и
//любимый цвет.
let myName = "Anna";
let myAge = 29;
let myfavorcolor = "green"
alert(`я ${myName} мне ${myAge} лет мой любимый цвет ${myfavorcolor}`)
//Создайте переменную, содержащую число с несколькими знаками после
//запятой. Используя соответствующий метод, округлите это число до двух
//наков после запятой.
let b = 8.079687657;
console.log(b.toFixed(4));

//Создайте строковую переменную с текстом "apple, orange, banana".
//Преобразуйте эту строку в массив, разделив её по запятым.
let fruts =  "apple, orange, banana"
let words = fruts.split(",");
console.log(words);


//Создайте переменную, содержащую результат некорректного математического
//выражения (например, деление строки на число). Используйте метод для
//проверки, является ли результат NaN .
let result = Math.sqrt(-1);
console.log(result);


//Используя шаблонные строки, создайте переменную, содержащую
//многострочный текст, где каждая строка будет новой строкой в исходном
//коде.
let gde = { hello: "hello",
 nameP:"Kate",
 where:"where are you ?",
 we:"Мы тебя ждем!",
}
console.log(`${gde.hello} 
    как тебя зовут?
     ${gde.nameP} 
     мы на море! Тут здорово!
     ${gde.where} 
     Приходи ${gde.we} `);

//Создайте переменную с булевым значением true . Преобразуйте её в строку
//и определите тип данных результата.
let boolean = true;
boolean.toString();
alert(boolean);

//Создайте символ с описанием "id" и используйте его в качестве ключа для
//свойства объекта. Добавьте ещё одно свойство с обычным строковым ключом.
let sym = Symbol("id");
console.log(typeof sym);

//Создайте массив с несколькими числами. Используя соответствующий метод,
//определите количество элементов в массиве и запишите результат в
//переменную.
let masN=[1,2,3,5,6,7,8,];
let x = masN.length;
console.log(x)
