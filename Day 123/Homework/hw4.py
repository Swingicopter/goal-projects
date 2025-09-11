class Product:
    def __init__(self, name, price):
        self.name = name
        self.price = price

    @staticmethod
    def discount(price, percent):
        return price - (price * percent / 100)


class Order:
    def __init__(self):
        self.__products = []

    def add_product(self, product):
        self.__products.append(product)

    def show_products(self):
        for p in self.__products:
            print(f"{p.name} - ${p.price}")

p1 = Product("Lays", 5)
p2 = Product("Water", 2)
p3 = Product("Coca-Cola", Product.discount(10, 20))

order = Order()
order.add_product(p1)
order.add_product(p2)
order.add_product(p3)

order.show_products()