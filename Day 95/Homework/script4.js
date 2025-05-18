const me = {
     name: "Nika",
     age: 20
    }

const you = me;
you.age = 25;

console.log(me.age);

// me.age is affected because you variable is the me variable.