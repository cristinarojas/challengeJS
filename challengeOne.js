// What does this code return?
var Foo = function (a) {

    this.bar = () => {
        return a;
    }
};

var f = new Foo(7); // f is an object that have instance of Foo.
f.bar(); // like f is an object I can access to the property this...

/////// Function expression Explanation ///////
// You need to declare an anonymous function and save it into a variable.
var functionExpression = function(a, b) { return a + b }

//---------------------------------------------------
// * This type of functions in js are not hoisted.
// means that you CAN'T use the function expression before you defined them.
functionExpression(4, 1); // functionExpression is not a function
var functionExpression = function(a, b) { return a + b }


//---------------------------------------------------
var functionExpression = function(a) {

  this.clousureFunction = () => {
    console.log('clousureFunction a->', a);
  }
}

// new keyword creates an empty object - { }
// functionExpression() is called as contructor function
// new -> constructs and returns an object (instance) of a constructor function
// bind property or function to the new object that is declared with new
var functionAsObject = new functionExpression(7);
// functionExpression {clousureFunction: ƒ}

// So in that case I can access to the function that is inside the objetc (like property)
functionAsObject.clousureFunction(); // 7
