const Foo = class NamedFoo {
  constructor() {}
  whoIsThere() {
    return NamedFoo.name;
  }
}
const bar = new Foo();
console.log(bar.whoIsThere());  // "NamedFoo"
console.log(Foo.name);          // "NamedFoo"
console.log(NamedFoo.name);     // ReferenceError: NamedFoo is not defined
