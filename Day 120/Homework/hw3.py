def func(**person):
    return f'Name: {person["name"]}, Age: {person["age"]}'

print(func(name = "Filipe", age = 13))