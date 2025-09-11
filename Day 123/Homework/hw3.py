class Animal:
    def __init__(self, name):
        self.name = name
    
    def sound(self):
        return 'Some sound.'

class Dog(Animal):
    def __init__(self, name):
        super().__init__(name)
    
    def sound(self):
        return 'Bark.'
    
class Cat(Animal):
    def __init__(self, name):
        super().__init__(name)

    def sound(self):
        return 'Meow.'
    
dawg = Dog('Herbert')
print(dawg.sound())

kitty = Cat('Whiskers')
print(kitty.sound())