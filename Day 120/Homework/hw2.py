def func(*str):
    result = ''

    for i in str:
        result += i

    return result

print(func('1', '6', '3', '8', '4'))