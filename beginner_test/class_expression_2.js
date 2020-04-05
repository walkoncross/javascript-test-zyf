const Foo = class {
  constructor() {}
  bar() {
    return 'Hello World!';
  }
};

const instance = new Foo();
console.log(instance.name)
console.log(instance.constructor)
console.log(instance.bar)
console.log(instance.bar());  // "Hello World!"
//console.log(Foo)
console.log(instance)
console.log(Foo.name)
console.log(Foo.constructor)
console.log(Foo.bar)
//console.log(Foo.bar())

