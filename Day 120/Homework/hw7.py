def multiply(*num):
    result = 1

    for i in num:
        result *= i
    
    return result

print(multiply(2, 2, 2, 2, 2, 2, 2, 2, 2))