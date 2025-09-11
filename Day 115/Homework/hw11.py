mixed = [2, 5, 8, 11, 14, 17, 20]
even = []
odd = []

for i in mixed:
    if i % 2 == 0:
        even.append(i)
    else:
        odd.append(i)

print(mixed)
print(even)
print(odd)