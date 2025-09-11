def func(dictionary):
    dictionary.update({"hobby": "skiing"})
    dictionary.popitem()
    return dictionary

person = {
    "name": "Filipe",
    "age": 13,
}

# dictionary შეუცვლელია.

print(func(person))