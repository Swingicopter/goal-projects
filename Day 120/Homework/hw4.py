def func(**car):
    return f'Brand: {car["brand"]}, Model: {car["model"]}, Year: {car["year"]}'

print(func(brand = "Dodge", model = "Charger", year = 1970))