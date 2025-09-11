numbers = [1, 4, 7, 10, 13, 16, 19]
new_list = []
new_list2 = []
new_list3 = []
new_list4 = []

for i in range(len(numbers)):
    new_list.append(numbers[i] * 2)

for i in numbers:
    if i % 2 == 1:
        new_list2.append(i * 2)

for i in numbers:
    new_list3.append(i * 2)

for i in numbers:
    if i % 2 == 1:
        new_list4.append(i)

print(new_list)
print(new_list2)
print(new_list3)
print(new_list4)