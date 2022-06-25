//Задание 1:


/* let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name; */



//Задание 2:

/* let newObject = {};

alert( isEmpty(newObject) );

newObject["tiny-secret"] = "wow";

alert( isEmpty(newObject))

function isEmpty(newObject){
    for (let key in newObject){
        return false;
    }
    return true;
} */


//Задание 3:

//Да, можно. Защита константы распространяется только на изменение самой переменной, но не ее ссылки.



//Задание 4:

/*let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }

let sum = 0;
for (let key in salaries){
    sum += salaries[key];
}
alert(sum); */


//Задание 5:


let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
  

  function multiplyNumeric(menu) {

    for(let key in multiplyNumeric) {

        if (typeof multiplyNumeric[key] == 'number') { 
            
            multiplyNumeric[key] *= 2;
        }
    }
}
