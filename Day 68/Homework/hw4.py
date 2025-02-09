def replacement(list, items):
    for i in range(len(items) - 1):
        list = list.append(items[i])

    return list

list1 = []
list2 = [90, "s3", "2yun", 2097]

print(replacement(list1, list2))