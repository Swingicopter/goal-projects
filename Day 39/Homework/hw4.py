li1 = [1, 2, 3, 4, 5]
li2 = [10, 9, 8, 7, 6]
li3 = [11, 12, 15, 14, 13]
combo = li1 + li2 + li3
sum = 0

for i in range(len(combo) - 1):
    sum = sum + combo[i] + combo[i + 1]

print(sum)

# ver gavige :(