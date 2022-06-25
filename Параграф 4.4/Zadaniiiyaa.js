//Задание 1:

/*let user = {
    name: "Джон",
    go: function() { alert(this.name) }
  };
  
  (user.go)() */




//Задание 2:
/*
1. Обычный выхов метода через точку.
2. Аналогично 1 ответу.
3. Сначала вычисляется выражение, затем вызов функции, на которую ссылается переменная.
4. Аналогично с 3 ответом. */




//Задание 3:

//Ошибка, так как определение this не ориентируется на объект. User.ref - необходимо вызывать, как метод, тогда все будет работать.




//Задание 4:

/*
let calculator = {

    sum() {

      return this.a + this.b;
    },
  
    mul() {

      return this.a * this.b;
    },
  
    read() {

      this.a = +prompt('a?', 0);
      this.b = +prompt('b?', 0);
    }
  };
  
  calculator.read();

  alert( calculator.sum() );

  alert( calculator.mul() ); */




//Задание 5:
/*
let ladder = {

    step: 0,

    up() {

      this.step++;
      return this;
    },
    down() {

      this.step--;
      return this;
    },
    showStep() {

      alert( this.step );
      return this;
    }
  }
  
  ladder.up().up().down().up().down().showStep(); */