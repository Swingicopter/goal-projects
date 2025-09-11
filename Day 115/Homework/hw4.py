def func(dictionary):
    return f'{dictionary.keys()} {dictionary.values()}'

print(func({
    "yes": 1,
    "no": 0
}))