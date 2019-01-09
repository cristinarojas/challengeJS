// Explain this inside the function.
var Foo = function (a) {

    this.bar = () => {
        return a;
    }
};


//---------------------------------------------------
// this ->  Refers to the object the function belongs to.
// this ->  in OOP, to refer to the class/object the function belongs to.
var Foo = function (a) {
    this.value = "Hola Criss";

    this.baz = function() {
      console.log(this.value);
    }
};

var inst = new Foo();
inst.baz();

// You can manipulate which object
// this refers to by using the apply() or call() functions
