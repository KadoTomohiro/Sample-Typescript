// static type
// var b1: boolean = true;

// var b1: number = 1;
// var b2: number = 1.1;
// var b3: number = 1e6;

// var b1: string = 'single';
// var b2: string = "double";
// var b3: string = 'a' + "b";

// var b1: boolean[] = [true, false];
// var b2: string[] = ['a', "b", 'c'];
// var b3: number[] = [0, 1, 2];
// var b4: Array<boolean> = [true, false];
// var b5: Array<string> = ['a', "b"];
// var b6: Array<number> = [1, 2];

// enum Attribute {Law, Neutral, Chaos};
//
// var attr1: Attribute = Attribute.Law;
// var attr2: Attribute = Attribute.Neutral;
// var attr3: Attribute = Attribute.Chaos;
//
// console.log(attr1);
// console.log(attr2);
// console.log(attr3);
//
// enum Color {Red = 1.1, Green = 2, Blue =3};
//
// console.log(Color.Red);
// console.log(Color.Green);
// console.log(Color.Blue);
//
// var c1: Color = Color.Red;
// console.log(Color[c1]);
// console.log(Color[Color.Green]);
// console.log(Color[1.1]);
// console.log(Color[2]);
// console.log(Color[3]);

// var v1: void;
// var v2: void = undefined;
// var v3 = null;
//
// function foo() {
//   console.log('foo');
// }
//
// console.log(v1);
// console.log(v2);
// console.log(v3);
// foo();

// function greeter(person: string){
//   return 'Hello, ' + person;
// }
//
// var user = 'Kado Tomohiro';
// // var user = 1; // Type Error
// //
// document.body.innerHTML = greeter(user)

// interface Person {
//   firstname: string;
//   lastname: string;
// }
//
// function greeter(person: Person){
//   return 'Hello, ' + person.lastname + person.firstname;
// }
//
// var user = {
//   firstname: 'Tomohiro',
//   lastname: 'Kado'
// };
//
// document.body.innerHTML = greeter(user)

class Student {
  fullname: string;
  constructor(public firstname, public lastname) {
    this.fullname = firstname + ' ' + lastname;
  }
}

interface Person {
  firstname: string;
  lastname: string;
}

function greeter(person: Person){
  return 'Hello, ' + person.lastname + person.firstname;
}

var user = new Student ('Tomohiro','Kado');

document.body.innerHTML = greeter(user);
