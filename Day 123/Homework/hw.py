class BankAccount:
    __balance = 0

    def __init__(self, balance = 0):
        self.__balance = balance

    def deposit(self, amount):
        self.__balance += amount

    def withdraw(self, amount):
        if self.__balance >= amount:
            self.__balance -= amount
        else:
            return "Not enough money."

    def get_balance(self):
        return self.__balance

account = BankAccount(100)

account.deposit(50)
print(account.get_balance())

account.withdraw(70)
print(account.get_balance())

# Data Hiding არის კონცეფცია, რომელიც ხაზს უსვამს მონაცემების ან ინფორმაციის მომხმარებლისგან დამალვას.
# ეს OOP-ის სტრატეგიების ერთ-ერთი მთავარი ასპექტია.