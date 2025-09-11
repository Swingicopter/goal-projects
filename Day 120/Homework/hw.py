def func(*num):
    result = 0

    for i in num:
        result += i

    return result

print(func(1, 2, 4, 8, 16, 32, 64, 128))