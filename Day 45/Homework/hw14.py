li = [3, 12, 5, 2, 6]

def func(l):
    newlist = []
    for i in range(len(l)):
        newlist.append(l[i] ** 2)

    return newlist

print(func(li))