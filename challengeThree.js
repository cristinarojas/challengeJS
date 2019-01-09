var Foo = function (a) {

    this.bar = () => {
        return a;
    }

    var baz = function () {
        return a;
    };
};

Foo.prototype = {
    this.biz = () => {
      return  this.bar();
    }
};

console.log('FOO-->', Foo)

var f = new Foo(7);
f.bar(); //=> 7
//f.baz(); //=> TypeError: f.baz is not a function
f.biz(); //=>
