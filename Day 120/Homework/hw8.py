def minMax(*ele):
    result = []

    for i in ele:
        result.append(i)

    return f'min: {min(result)}, max: {max(result)}'

print(minMax(1, 2, 3, 4, 5, 6, 7, 8))