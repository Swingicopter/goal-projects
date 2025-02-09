def ins3rt(list, item, index):
    newlist = []
    newlist = list.insert(index, item)
    return newlist

li = [1, 2, 3, 5]

print(ins3rt(li, 4, 3))