def appending(list1, list2):
    for i in range(len(list2) - 1):
        list1 = list1.append(list2[i])

    return list1

list3 = []
list4 = [360, "dm", "black", 2147]

print(appending(list3, list4))