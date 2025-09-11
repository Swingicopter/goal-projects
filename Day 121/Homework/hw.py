class Human:
    def __init__(self, name, age):
        self.name = name
        self.age = age

class Cat:
    def __init__(self, breed, age):
        self.breed = breed
        self.age = age


class Animal(Human, Cat):
    def __init__(self, name, age, breed):
        Human.__init__(self, name, age)
        Cat.__init__(self, breed, age)


class Batman:
    def __init__(self, name="Batman"):
        self.name = name

    def fight(self):
        return f"{self.name} is fighting crime!"

    def drive(self):
        return f"{self.name} is driving the Batmobile!"
    

class SparisMolare(Human, Cat, Batman):
    def __init__(self, name, age, breed):
        # გამოვიძახოთ Human, Cat, Batman კონსტრუქტორები
        Human.__init__(self, name, age)
        Cat.__init__(self, breed, age)
        Batman.__init__(self, "SparisMolare")

    def full_info(self):
        return f"""
        Name: {self.name}
        Age: {self.age}
        Breed: {self.breed}
        Identity: {self.name} (Batman mode!)
        """

s = SparisMolare("Nino", 25, "Siamese")

print(s.full_info())
print(s.fight())   # Batman მეთოდი
print(s.drive())