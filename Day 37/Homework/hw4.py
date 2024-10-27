liSt = [-3, 8, 9, -7, 5]

def func(argu):
    result = []
    for i in argu:
        if i > 0:
            result.append(i)
    return result

print(func(liSt))