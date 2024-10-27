l1st = [2, 3, 1, 5]

def func(argu):
    result = argu[0]
    for i in argu:
        if i < result:
            result = i
    return result

print(func(l1st))